import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método no permitido' 
    });
  }

  try {
    const { name, email, message } = req.body;

    // Validación básica de campos requeridos
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son requeridos'
      });
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Email inválido'
      });
    }

    // Configuración del transportador de correo
    // IMPORTANTE: Estas variables deben estar configuradas en Vercel
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER, // tu email
        pass: process.env.SMTP_PASS, // tu contraseña de aplicación
      },
    });

    // Configuración del correo a enviar
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // sender address
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER, // recipient
      subject: `Nuevo mensaje de contacto - Innova Arquitectura`, // Subject line
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #000; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
            <p>Este mensaje fue enviado desde el formulario de contacto de Innova Arquitectura.</p>
            <p>Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Santiago' })}</p>
          </div>
        </div>
      `,
      // También agregar versión texto plano
      text: `
        Nuevo mensaje de contacto - Innova Arquitectura
        
        Nombre: ${name}
        Email: ${email}
        
        Mensaje:
        ${message}
        
        Enviado el: ${new Date().toLocaleString('es-ES', { timeZone: 'America/Santiago' })}
      `
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Respuesta exitosa
    return res.status(200).json({
      success: true,
      message: 'Mensaje enviado correctamente'
    });

  } catch (error) {
    console.error('Error al enviar correo:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor. Intenta nuevamente más tarde.'
    });
  }
} 