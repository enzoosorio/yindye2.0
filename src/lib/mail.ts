import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendVerificationEmail = async(email : string, token : string ) => {

     const confirmLink = `http://localhost:3000/new-verification?token=${token}`

     await resend.emails.send({
        from : 'onboarding@resend.dev',
        to : email,
        subject : 'Confirma tu correo para poder acceder a nuestra web!',
        html : `
        <div>
        <h3>Hola, queremos poder trabajar con correos verificados</h3>
        <p>Click <a href="${confirmLink}">aquí</a> para poder confirmar tu correo electrónico</p>
        </div>`
     })
}