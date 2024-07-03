import { Prisma } from "@prisma/client";
import { db } from "../utils/db/prisma";

export const getCategoriesIdByPostId = async(postId : string) => {
    try {
        const blog = await db.postCategory.findMany({
            where : {
                postId : postId
            },
            select: {
                categoryId: true, // Solo selecciona el categoryId
            },
        })
        
        return blog;
    } catch (error) {
        return console.log(error)
    }
}



export const getCategoryNamesByIds = async (categoryIds: string[]) => {
    try {
      if (!categoryIds.length) {
        return [];
      }
  
      const categories = await db.category.findMany({
        where: {
          id: {
            in: categoryIds,
          },
        },
        select: {
          name: true,
        },
      });
  
      return categories.map(category => category.name);
    } catch (error) {
      console.log(error);
      return [];
    }
  };


  export const getCategoryNamesByPostId = async (postId: string) => {
    try {
      // Obtener los categoryIds por postId
      const categoryIds = await getCategoriesIdByPostId(postId);
  
      if (!categoryIds || !categoryIds.length) {
        return [];
      }
  
      // Obtener los nombres de las categorías por los categoryIds
      const categoryNames = await getCategoryNamesByIds(categoryIds.map(cat => cat.categoryId));
  
      return categoryNames;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  
