import * as z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const BlogSchema = z.object({
    title : z.string({
        message : 'El titulo debe ser una cadena de texto.'
    }).min(5, { message : 'Titulo de minimo 5 caracteres'}),

    description : z.string().min(10, {
        message : 'La descripcion debe ser minimo de 10 caracteres'
    }),

    mainImage: z.any().refine((files) => {
        if (!files) return false;
        return files?.[0]?.size <= MAX_FILE_SIZE;
    }, {
        message: 'Tamaño máximo de la imagen es de 5MB'
    }).refine((files) => {
        if (!files) return false;
        return ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type);
    }, {
        message: 'Se aceptan solo jpeg, jpg, png y webp.'
    }),

    altMainImage : z.string().optional(),

    finalImage: z.any().optional()
    .refine((files) => {
        if (!files) return false;
        return files?.[0]?.size <= MAX_FILE_SIZE;
    }, {
        message: 'Tamaño máximo de la imagen es de 5MB'
    }).refine((files) => {
        if (!files) return false;
        return ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type);
    }, {
        message: 'Se aceptan solo jpeg, jpg, png y webp.'
    }), 

    altFinalImage : z.string().optional(),
})


export const BlogSchemaOnServer = z.object({
    title : z.string({
        message : 'El titulo debe ser una cadena de texto.'
    }).min(5, { message : 'Titulo de minimo 5 caracteres'}),

    description : z.string().min(10, {
        message : 'La descripcion debe ser minimo de 10 caracteres'
    }),

    mainImage: z.string(),

    altMainImage : z.string().optional(),

    finalImage: z.string().optional(),

    altFinalImage : z.string().optional(),
})