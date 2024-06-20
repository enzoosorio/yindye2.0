'use server'
import { RegisterSchema } from '../schemas/registerSchema';
import * as z from 'zod'
import bcryptjs from 'bcryptjs';
import { db } from '../utils/db/prisma';
import { getUserByEmail } from '../data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';
export const registerUser = async(valuesRegister : z.infer<typeof RegisterSchema>) => {
    const validateValuesRegister = RegisterSchema.safeParse(valuesRegister);

    if(!validateValuesRegister.success){
        return {error : 'Valores invalidos'}
    }

    const {email, name, password} = validateValuesRegister.data
    const hashedPassword = await bcryptjs.hash(password, 10)

    // nos aseguramos que el email no exista 

    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return {error : 'Email ya existe! inicia sesión'}
    }

    await db.user.create({
        data: { 
            name : name,
            email : email,
            password : hashedPassword
        }
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return {success : 'Correo de confirmación enviado!'}
}