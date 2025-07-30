# 🔧 Configuración de Variables de Entorno en Vercel

## Pasos para configurar el envío de correos:

### 1. 📧 Preparar Gmail (innova.arch.av@gmail.com)

**IMPORTANTE**: Necesitas acceso a la cuenta `innova.arch.av@gmail.com` para:

1. **Habilitar autenticación de 2 factores** (si no está habilitada)
2. **Generar contraseña de aplicación**:
   - Ve a [Google Account Security](https://myaccount.google.com/security)
   - Busca "App passwords" 
   - Selecciona "Mail" como aplicación
   - Copia la contraseña generada (16 caracteres)

### 1.5. 🔒 Obtener reCAPTCHA Secret Key

1. **Ve a Google reCAPTCHA Admin Console**: [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. **Busca tu sitio** (o crea uno nuevo si es necesario)
3. **Site Key actual**: `6Lfz9pMrAAAAAFnMtU3lpuOZBMmcTojmqi0yIyf3`
4. **Copia la Secret Key** (la que NO es pública)
5. **Úsala como** `RECAPTCHA_SECRET_KEY`

### 2. 🚀 Configurar en Vercel Dashboard

Ve a tu proyecto en Vercel → **Settings** → **Environment Variables**

Agrega estas **4 variables** (Gmail configurado automáticamente):

| Variable | Valor | Ejemplo |
|----------|-------|---------|
| `SMTP_USER` | `innova.arch.av@gmail.com` | innova.arch.av@gmail.com |
| `SMTP_PASS` | `[contraseña de aplicación]` | abcd efgh ijkl mnop |
| `RECEIVER_EMAIL` | `innova.arch.av@gmail.com` | innova.arch.av@gmail.com |
| `RECAPTCHA_SECRET_KEY` | `[secret key de reCAPTCHA]` | 6Lfz9pMrAAAAAA... |

### 3. ✅ Verificar configuración

Una vez configuradas las variables:
1. Haz un nuevo deploy: `vercel --prod`
2. Prueba el formulario de contacto
3. Verifica que lleguen los correos a `innova.arch.av@gmail.com`

### 4. 🛠️ Troubleshooting

Si no funcionan los correos:

- ✅ Verifica que la contraseña de aplicación sea correcta
- ✅ Asegúrate de que 2FA esté habilitado en Gmail
- ✅ Revisa los logs en Vercel Dashboard → Functions
- ✅ Prueba enviar un email de prueba desde Gmail

### 📝 Ejemplo de correo que recibirás:

```
Asunto: Nuevo mensaje de contacto - Innova Arquitectura

Nombre: Juan Pérez
Email: juan@ejemplo.com

Mensaje:
Hola, me interesa cotizar un proyecto...

Enviado el: 29/07/2025 23:30:15
```

¡Listo! Los correos del formulario llegarán a `innova.arch.av@gmail.com` 📧 