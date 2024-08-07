'use server'

import * as z from 'zod';
import { BlogSchemaOnServer } from '@/schemas/blogSchema';
import { db } from '@/utils/db/prisma';
import { auth } from '@/auth';

export const upBlog = async(data : z.infer<typeof BlogSchemaOnServer>, description : string, tags : string[]) => {

    const session = await auth();
    const idUser = session?.user?.id;
    const validateValuesBlog = BlogSchemaOnServer.safeParse(data);

    if (!idUser) {
        return { error: 'Usuario no autenticado' };
    }
    
    if(!validateValuesBlog.success){
        return {error : 'Algunos datos son incorrectos!'};
    }

    if(tags.length === 0){
        return {error : 'No existen tags!'}
    }

    const { title, altFinalImage, altMainImage, finalImage, mainImage} = validateValuesBlog.data;
    
    try {
        await db.post.create({
            data: {
                title : title,
                description : description,
                mainImage : mainImage,
                altMainImage : altMainImage || '',
                finalImage : finalImage || '',
                altFinalImage : altFinalImage || '',
                published: true,
                authorId: idUser,
                categories : {
                    create : tags.map(tag => ({
                        category : {
                            connectOrCreate : {
                                where : {name : tag},
                                create : {name : tag}
                            }
                        }
                    }))
                }
            },
        });

        return { success: "Blog creado correctamente!" };
    } catch (error) {
        return { error: 'Error al crear el blog.' };
    }
}