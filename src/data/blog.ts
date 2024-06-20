import { db } from "../utils/db/prisma";

export const getBlogById = async(id : string) => {
    try {
        
        const blog = await db.post.findUnique({
            where : {
                id : id
            }
        })
        
        return blog;
    } catch (error) {
        return console.log(error)
    }
}

export const getBlogs = async() => {
    try {
        
        const blogs = await db.post.findMany();
        
        return blogs;
    } 
    catch (error) {
        return console.log(error)
    }
}