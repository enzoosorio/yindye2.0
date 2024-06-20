'use server'

import * as z from 'zod';
import { PoloSchemaOnServer } from '@/schemas/poloSchema';
import { db } from '@/utils/db/prisma';

export const upPolo = async(data : z.infer<typeof PoloSchemaOnServer>, images : string[]) => {
    const validateValuesPolo = PoloSchemaOnServer.safeParse(data);
    
    if(!validateValuesPolo.success){
        return {error : 'Algunos datos son incorrectos!'};
    }

    const {nameProduct, smallNameProduct, description, price, sizeS, sizeM, sizeL, sizeXL} = validateValuesPolo.data

    try {
        await db.product.create({
            data: {
                nameProduct,
                smallNameProduct,
                price: parseFloat(price),
                description,
                sizeS: parseInt(sizeS),
                sizeM: parseInt(sizeM),
                sizeL: parseInt(sizeL),
                sizeXL: parseInt(sizeXL),
                images: {
                    create: images.map((url, index) => ({
                        url,
                        type: index < 7 ? 'NORMAL' : 'SMALL'
                    }))
                }
            }
        });

        return { success: "Post polo creado correctamente!" };
    } catch (error) {
        console.error(error);
        return { error: 'Error al crear el post.' };
    }
}