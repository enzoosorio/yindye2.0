import * as z from 'zod';

export const LoginSchema = z.object({
    email : z.string().email({
        message : 'Correo electrónico inválido'
    }),
    password : z.string({
        message : 'Contraseña inválida'
    }).min(1, {
        message : 'La contraseña es requerida'
    })
})