import NextAuth, {DefaultSession} from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "@/utils/db/prisma"
import { getUserById } from "./data/user"

 
declare module "next-auth" {
 
  interface Session {
    user: {
      role: 'ADMIN'| 'USER'
     
    } & DefaultSession["user"]
  }
}
 


export const { auth, handlers, signIn, signOut } = NextAuth({
  pages : {
    signIn : '/login',
    error : '/error'
  },
  adapter: PrismaAdapter(db),
  events :{ 
    async linkAccount({user}){
      await db.user.update({
        where : {
          id : user.id
        },
        data : {emailVerified : new Date() }
      })
    }
  },
  session: { strategy: "jwt" },
  callbacks : {
    async signIn({user, account}){
      
      if(account?.provider !== 'credentials') return true;

      if(user.id){
        const existingUser = await getUserById(user.id);
        
        if(!existingUser?.emailVerified) return false;
        }
      return true;
    },
    async session({token, session}){

      if(session.user && token.sub){
        session.user.id = token.sub;
      }

      if(token.role && session.user){
        session.user.role =token.role as "ADMIN" | "USER";
      }

      return session
    },
    async jwt({token}){
      if(!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if(!existingUser) return token;

      token.role = existingUser.role

      return token
    }
  },
  ...authConfig,
})