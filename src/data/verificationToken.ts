import { db } from "@/utils/db/prisma";

export const getVerificationTokenByEmail = async(email : string) => {

    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: { 
                email : email
            }
        })
        
        return verificationToken

    } catch (error) {
        return null;        
    }

}

export const getVerificationTokenByToken = async(token : string) => {

    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: { 
                token : token
            }
        })
        
        return verificationToken

    } catch (error) {
        return null;        
    }

}