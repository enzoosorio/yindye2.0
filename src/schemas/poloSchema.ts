import * as z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const PoloSchema = z.object({
    nameProduct: z.string({
        message: 'El nombre debe ser una cadena de texto.'
    }).min(3, { message: 'Nombre de producto mínimo 3 caracteres' }),
    smallNameProduct: z.string({
        message: 'El sub nombre debe ser una cadena de texto.'
    }).min(3, { message: 'Sub nombre de producto mínimo 3 caracteres' }),
    price: z.string().refine(price => !isNaN(parseFloat(price)), {
        message: 'El precio debe ser un número'
    }),
    description: z.string().min(10, {
        message: 'La descripción debe ser mínimo de 10 caracteres'
    }),
    sizeS: z.string().refine(sizeS => {
        const sizeSNumber = parseInt(sizeS);
        return !isNaN(sizeSNumber) && sizeSNumber >= 0;
    }, {
        message: 'La talla S debe ser un número entero no negativo'
    }),
    sizeM: z.string().refine(sizeM => {
        const sizeMNumber = parseInt(sizeM);
        return !isNaN(sizeMNumber) && sizeMNumber >= 0;
    }, {
        message: 'La talla M debe ser un número entero no negativo'
    }),
    sizeL: z.string().refine(sizeL => {
        const sizeLNumber = parseInt(sizeL);
        return !isNaN(sizeLNumber) && sizeLNumber >= 0;
    }, {
        message: 'La talla L debe ser un número entero no negativo'
    }),
    sizeXL: z.string().refine(sizeXL => {
        const sizeXLNumber = parseInt(sizeXL);
        return !isNaN(sizeXLNumber) && sizeXLNumber >= 0;
    }, {
        message: 'La talla XL debe ser un número entero no negativo'
    }),
    normalImages: z.any().refine((files) => {
        if (!files || files.length === 0) return false;
        for (let i = 0; i < files.length; i++) {
            if (files[i]?.size > MAX_FILE_SIZE) return false;
            if (!ACCEPTED_IMAGE_TYPES.includes(files[i]?.type)) return false;
        }
        return true;
    }, {
        message: 'Cada imagen debe ser menor a 5MB y en formato jpeg, jpg, png o webp'
    }),
    smallImages: z.any().refine((files) => {
        if (!files || files.length === 0) return false;
        for (let i = 0; i < files.length; i++) {
            if (files[i]?.size > MAX_FILE_SIZE) return false;
            if (!ACCEPTED_IMAGE_TYPES.includes(files[i]?.type)) return false;
        }
        return true;
    }, {
        message: 'Cada imagen debe ser menor a 5MB y en formato jpeg, jpg, png o webp'
    }),
});



export const PoloSchemaOnServer = z.object({
    nameProduct: z.string({
        message: 'El nombre debe ser una cadena de texto.'
    }).min(3, { message: 'Nombre de producto mínimo 3 caracteres' }),
    smallNameProduct: z.string({
        message: 'El sub nombre debe ser una cadena de texto.'
    }).min(3, { message: 'Sub nombre de producto mínimo 3 caracteres' }),
    price: z.string().refine(price => !isNaN(parseFloat(price)), {
        message: 'El precio debe ser un número'
    }),
    description: z.string().min(10, {
        message: 'La descripción debe ser mínimo de 10 caracteres'
    }),
    sizeS: z.string().refine(sizeS => {
        const sizeSNumber = parseInt(sizeS);
        return !isNaN(sizeSNumber) && sizeSNumber >= 0;
    }, {
        message: 'La talla S debe ser un número entero no negativo'
    }),
    sizeM: z.string().refine(sizeM => {
        const sizeMNumber = parseInt(sizeM);
        return !isNaN(sizeMNumber) && sizeMNumber >= 0;
    }, {
        message: 'La talla M debe ser un número entero no negativo'
    }),
    sizeL: z.string().refine(sizeL => {
        const sizeLNumber = parseInt(sizeL);
        return !isNaN(sizeLNumber) && sizeLNumber >= 0;
    }, {
        message: 'La talla L debe ser un número entero no negativo'
    }),
    sizeXL: z.string().refine(sizeXL => {
        const sizeXLNumber = parseInt(sizeXL);
        return !isNaN(sizeXLNumber) && sizeXLNumber >= 0;
    }, {
        message: 'La talla XL debe ser un número entero no negativo'
    }),
    normalImages: z.any(),
    smallImages: z.any(),
});