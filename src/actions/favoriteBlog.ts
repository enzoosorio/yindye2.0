'use server'
import { db } from "../utils/db/prisma";

export async function addFavoriteBlog(userId : string, postId : string) {

    if(!userId || !postId) {
        return null
    }


    return await db.favoritePost.create({
      data: {
        userId,
        postId,
      },
    });
  
  }
  
  export async function removeFavoriteBlog(userId : string, postId : string) {

    if(!userId || !postId) {
        return null
    }

    return await db.favoritePost.delete({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });
  }
  
  export async function getIsFavoriteBlog(userId : string, postId : string) {
    const favorite = await db.favoritePost.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });
    return !!favorite;
  }

  export async function getFavoritesBlogsIds(userId : string) {
    const favorites = await db.favoritePost.findMany({
      where: {
        userId : userId
      },
    });
    return favorites;
  }

  export async function getFavoritesBlogsIdsPagination(userId : string, numberOfBlogs : number, page :number) {
    const favorites = await db.favoritePost.findMany({
      where: {
        userId : userId
      },
      orderBy : {
        post : {
          createdAt : 'desc'
        }
      },
      take : numberOfBlogs,
      skip : page * numberOfBlogs,
    });
    return favorites;
  }