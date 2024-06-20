import { db } from "../utils/db/prisma";

export const getImagesPoloByPoloId = async(id : string) => {
    try {        
        const images = await db.image.findMany({
            where : {
                productId : id
            }
        })
        
        return images;
    } catch (error) {
        return console.log(error)
    }
}

export const getImagePoloById = async(id : string) => {
    try {        
        const image = await db.image.findFirst({
            where : {
                productId : id
            }
        })
        
        return image;
    } catch (error) {
        return console.log(error)
    }
}