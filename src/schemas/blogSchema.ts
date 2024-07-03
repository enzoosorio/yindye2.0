import * as z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const BlogSchematTest = z.object({
    title : z.string().optional(),
    tags : z.string().optional(),
    mainImage: z.any().optional(),

    altMainImage : z.string().optional(),

    finalImage: z.any().optional(),

    altFinalImage : z.string().optional(),
})

export const BlogSchema = z.object({
    title : z.string({
        message : 'El titulo debe ser una cadena de texto.'
    }).min(5, { message : 'Titulo de minimo 5 caracteres'}),
    tags: z.string({
        message: 'El blog debe tener como mínimo una etiqueta'
      }).refine((tag) => tag.includes(','), {
        message: 'Debe haber al menos una coma para separar las etiquetas.'
      }).refine((tag) => {
        const tagsArray = tag.split(',').map(t => t.trim());
        return tagsArray.every(t => t.length > 0);
      }, {
        message: 'Cada etiqueta debe tener al menos un carácter y no debe estar vacía.'
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

    // description : z.string().min(10, {
    //     message : 'La descripcion debe ser minimo de 10 caracteres'
    // }),

    mainImage: z.string(),

    altMainImage : z.string().optional(),

    finalImage: z.string().optional(),

    altFinalImage : z.string().optional(),
})