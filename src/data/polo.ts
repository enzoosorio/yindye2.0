import { db } from "../utils/db/prisma";

export const getPoloById = async(id : string) => {
    try {
        
        const polo = await db.product.findUnique({
            where : {
                id : id
            }
        })
        
        return polo;
    } catch (error) {
        return console.log(error)
    }
}

export const getPolos = async() => {
    try {
        
        const polos = await db.product.findMany();
        
        return polos;
    } 
    catch (error) {
        return console.log(error)
    }
}

export const getPolosToHero = async () => {
    try {
        const polos = await db.product.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take: 3
        });
        
        return polos;
    } catch (error) {
        return console.log(error);
    }
}