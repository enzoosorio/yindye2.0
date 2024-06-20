import * as z from 'zod';

export const RegisterSchema = z.object({
    name : z.string({
        message : 'Nombre invalido'
    }).min(2, {
        message: 'Nombre como minimo 2 caracteres'
    }),
    email : z.string().email({
        message : 'Correo electrónico inválido'
    }),
    password : z.string({
        message : 'Contraseña inválida'
    }).min(6, {
        message : 'Contraseña mínimo de 6 caracteres'
    })
})