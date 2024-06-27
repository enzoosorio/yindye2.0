import { Prisma } from "@prisma/client";
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



export const getNumberOfBlogsPosts = async() => {
    try {
        
        const numberOfPosts = await db.post.count();
        
        return numberOfPosts;
    } 
    catch (error) {
        return console.log(error)
    }
}


export const getBlogsPagination = async (numberOfBlogs: number, page: number, ordenamiento: Prisma.SortOrder) => {
   
    if(!ordenamiento){
        return console.error('no hay un ordenamiento predefinido');
    }
    
    try {
      const blogs = await db.post.findMany({
        orderBy: {
          createdAt: ordenamiento,
        },
        take: numberOfBlogs,
        skip: page * numberOfBlogs,
      });
      return blogs;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
