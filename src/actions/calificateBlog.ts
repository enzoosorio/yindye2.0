'use server'

import { db } from '@/utils/db/prisma';
import { auth } from '@/auth';
import { getCalificationBlogByUserAndBlogId } from '@/data/calificationblog';

export const calificateBlog = async(calificacion : number, idBlog : string) => {

    const session = await auth();
    const idUser = session?.user?.id;

    if (!idUser) {
        return { error: 'Usuario no autenticado' };
    }

    
    if(typeof calificacion !== 'number'){
        return {error : 'Las calificaciones deben ser un numero!'}
    }
    
    if (calificacion < 1 || calificacion > 5) {
        return { error: 'La calificación debe estar entre 1 y 5' };
      }

    try {
    const existingCalification = await getCalificationBlogByUserAndBlogId(idUser, idBlog);

    if (existingCalification) {
      await db.rating.update({
        where: {
          id: existingCalification.id
        },
        data: {
          value: calificacion
        }
      });

      return { success: 'La calificación ha sido actualizada correctamente' };
    }

    await db.rating.create({
      data: {
        postId: idBlog,
        userId: idUser,
        value: calificacion
      }
    });

    return { success: 'Gracias por calificar este blog' };
  } catch (error) {
    console.error('Error al calificar el blog:', error);
    return { error: 'Error al calificar el blog' };
  }
}