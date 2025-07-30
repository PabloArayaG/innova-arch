# API de Envío de Correos - Innova Arquitectura

## 📧 Configuración

Esta API utiliza **Vercel Serverless Functions** para manejar el envío de correos desde el formulario de contacto.

### Variables de Entorno Requeridas

Configura estas variables en **Vercel Dashboard** → **Settings** → **Environment Variables**:

```bash
# Configuración SMTP simplificada (Gmail hardcodeado)
SMTP_USER=innova.arch.av@gmail.com
SMTP_PASS=tu-contraseña-de-aplicacion

# Email destino (donde llegarán los mensajes)
RECEIVER_EMAIL=innova.arch.av@gmail.com

# reCAPTCHA v2 (checkbox clásico)
RECAPTCHA_SECRET_KEY=tu-secret-key-de-recaptcha
```

### 🔐 Configuración con Gmail

1. **Habilitar 2FA** en tu cuenta de Gmail
2. **Generar contraseña de aplicación**:
   - Ve a Google Account → Security → App passwords
   - Genera una contraseña específica para esta aplicación
   - Usa esa contraseña en `SMTP_PASS`

### 🚀 Uso de la API

**Endpoint:** `POST /api/send`

**Body:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com", 
  "message": "Hola, me interesa un proyecto...",
  "recaptchaToken": "03AGdBq25..."
}
```

**Respuesta exitosa:**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente"
}
```

**Respuesta de error:**
```json
{
  "success": false,
  "message": "Descripción del error"
}
```

### 🛠️ Integración con el Frontend

El componente `ContactSection.jsx` ya está preparado para usar esta API. Solo necesitas actualizar la URL del endpoint si es necesario.

### ⚡ Proveedores SMTP Alternativos

Si prefieres usar otro proveedor:

- **SendGrid**: Más robusto para producción
- **Resend**: Moderno y fácil de usar
- **Mailgun**: Muy confiable
- **Gmail**: Bueno para testing y proyectos pequeños

### 🔍 Testing Local

Para testear localmente, instala `vercel-cli`:

```bash
npm i -g vercel
vercel dev
```

Tu API estará disponible en `http://localhost:3000/api/send` 