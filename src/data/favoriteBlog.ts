import { getBlogById } from "./blog";

// Definimos una interfaz para representar la estructura del objeto favoriteBlogsId
interface FavoriteBlog {
    postId: string;
  }
  
  // Definimos el tipo de retorno de la función, que será una promesa que resuelve en un array de objetos o null
  export async function getFavoriteBlogsByFavoritesIds(
    favoriteBlogsId: FavoriteBlog[]
  ): Promise<any[] | null> {
    let favoritePosts: any[] = [];
  
    try {
      // Utilizamos Promise.all para esperar a que todas las promesas dentro del map se resuelvan
      const posts = await Promise.all(
        favoriteBlogsId.map(async (favoriteBlogId) => {
          return await getBlogById(favoriteBlogId.postId);
        })
      );
  
      favoritePosts = posts.filter(post => post !== null);
  
      if (favoritePosts.length < 1) {
        return null;
      }
  
      return favoritePosts;
  
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  