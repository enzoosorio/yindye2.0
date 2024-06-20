import { NextResponse } from 'next/server';
import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { DEFAULT_LOGIN_REDIRECT, 
  apiAuthPrefix, 
  authRoutes
} from './routes';
const { auth } = NextAuth(authConfig);


export default auth(async function middleware(req) {

  const { nextUrl } = req;
  
  const isLoggedIn = !!req.auth;
  
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return NextResponse.next();

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
