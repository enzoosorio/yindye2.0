
import { db } from "../utils/db/prisma";

export const getCalificationBlogByUserAndBlogId = async(idUser : string, idBlog : string) => {
    try {
        
        const calificationBlog = await db.rating.findFirst({
            where : {
                postId : idBlog,
                userId : idUser
            }
        })
        
        return calificationBlog;
    } catch (error) {
        return console.log(error)
    }
}
