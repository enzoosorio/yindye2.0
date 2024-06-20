'use server'
import * as z from 'zod'
import { LoginSchema } from '@/schemas/loginSchema'
import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import bcryptjs from 'bcryptjs'
import { sendVerificationEmail } from '@/lib/mail';

export const login = async(valuesLogin : z.infer<typeof LoginSchema>) => {
    const validateValuesLogin = LoginSchema.safeParse(valuesLogin);

    if(!validateValuesLogin.success){
        return {error : 'Valores invalidos'}
    }

    const {email, password} = validateValuesLogin.data

    const existingUser = await getUserByEmail(email);

    if(!existingUser || !existingUser.email || !existingUser.password){
        return {error : 'No existe el email!'}
    }

    const passwordMatch = await bcryptjs.compare(password, existingUser.password);

    if(!passwordMatch){
        return {error : 'La contraseña es incorrecta.'}
    }

    if(!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(existingUser.email)
        await sendVerificationEmail(verificationToken.email, verificationToken.token)
        return {advertisement : "Se te ha enviado un correo de confirmación a tu bandeja."}
    }

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo : DEFAULT_LOGIN_REDIRECT,
        })


    } catch (error) {
        if(error instanceof AuthError){
            switch(error.type){
                case 'CredentialsSignin' :
                    return {error : 'Datos incorrectos.'}
                default :
                    return {error : 'Algo fue mal, contacta con nosotros.'}
                }
        }

        throw error;
    }

    return {success : 'Logueo exitoso!'}

}