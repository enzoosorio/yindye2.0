import { db } from "../utils/db/prisma";

export const getUserByEmail = async(email : string) => {
    try {
        const userByEmail = await db.user.findUnique({
            where : {
                email : email
            }
        })
        return userByEmail;

    } catch (error) {
        return console.log(error)
    }
}

export const getUserById = async(id : string) => {
    try {
        const userById = await db.user.findUnique({
            where : {
                id : id
            }
        })
        return userById;
        
    } catch (error) {
        return console.log(error)
    }
}