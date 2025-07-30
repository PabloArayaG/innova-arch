import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/contactSection.css';
// Importar una imagen para usar como fondo
import backgroundImage from '../assets/Viviendas/Enscape_2025-04-27-22-55-27.JPG';

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  // Referencias para animaciones GSAP
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageContainerRef = useRef(null);
  const formContainerRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar reCAPTCHA
    if (!recaptchaToken) {
      setSubmitStatus('error');
      console.error('Por favor completa el reCAPTCHA');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Limpiar formulario después del éxito
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        // Resetear reCAPTCHA
        setRecaptchaToken(null);
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        setSubmitStatus('error');
        console.error('Error al enviar:', result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error de conexión:', error);
    } finally {
      setIsSubmitting(false);
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = '+56975274567';
    const message = 'Hola, me interesa conocer más sobre sus servicios de renders arquitectónicos.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Cargar script de reCAPTCHA y configurar callbacks globales
  useEffect(() => {
    // Exponer callbacks globalmente para reCAPTCHA
    window.onRecaptchaChange = (token) => {
      setRecaptchaToken(token);
    };
    
    window.onRecaptchaExpired = () => {
      setRecaptchaToken(null);
    };

    const loadRecaptcha = () => {
      if (window.grecaptcha) return; // Ya está cargado
      
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };
    
    loadRecaptcha();

    // Cleanup
    return () => {
      delete window.onRecaptchaChange;
      delete window.onRecaptchaExpired;
    };
  }, []);

  // Animaciones GSAP elegantes
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Configuración inicial - efectos sutiles
      gsap.set(titleRef.current, {
        opacity: 0
      });

      gsap.set(imageContainerRef.current, {
        opacity: 0,
        scale: 1.05,
        filter: "blur(20px)"
      });

      gsap.set(formContainerRef.current, {
        opacity: 0
      });

      // Elementos del formulario para animación individual
      const formElements = formContainerRef.current?.querySelectorAll('.form-group, .form-submit, .form-divider, .whatsapp-button');

      if (formElements) {
        gsap.set(formElements, {
          opacity: 0,
          y: 20,
          filter: "blur(5px)"
        });
      }

      // Timeline principal con ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animación mínima y directa
      tl
      // Título aparece rápido
      .to(titleRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      // Todo aparece casi instantáneamente
      .to([imageContainerRef.current, formContainerRef.current], {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.2")
      // Imagen se ajusta rápidamente
      .to(imageContainerRef.current, {
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power2.out"
      }, "<")
      // Formulario aparece casi al instante
      .to(formElements, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.2,
        stagger: 0.03,
        ease: "power2.out"
      }, "-=0.3");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          {/* Título principal */}
          <h2 ref={titleRef} className="contact-title">
            Contacto
          </h2>

          <div className="contact-wrapper">
            {/* Imagen de fondo a la izquierda */}
            <div ref={imageContainerRef} className="contact-image-container">
              <div className="contact-background-image">
                <img src={backgroundImage} alt="Innova Architecture" className="contact-bg-img" />
                <div className="contact-image-overlay"></div>
              </div>
            </div>

            {/* Formulario a la derecha */}
            <div ref={formContainerRef} className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                {/* reCAPTCHA */}
                <div className="recaptcha-container">
                  <div 
                    className="g-recaptcha" 
                    data-sitekey="6Lfz9pMrAAAAAFnMtU3lpuOZBMmcTojmqi0yIyf3"
                    data-callback="onRecaptchaChange"
                    data-expired-callback="onRecaptchaExpired"
                  ></div>
                </div>
                
                <button type="submit" className="form-submit" disabled={isSubmitting || !recaptchaToken}>
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                {/* Mensajes de estado */}
                {submitStatus === 'success' && (
                  <div className="form-message form-message-success">
                    ✅ Mensaje enviado correctamente. Te contactaremos pronto.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-message form-message-error">
                    ❌ Error al enviar el mensaje. Verifica el reCAPTCHA y todos los campos, luego intenta nuevamente.
                  </div>
                )}

                {/* Divisor visual */}
                <div className="form-divider">
                  <span>o</span>
                </div>

                {/* Botón WhatsApp integrado */}
                <button type="button" onClick={handleWhatsApp} className="whatsapp-button">
                  <div className="whatsapp-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                    </svg>
                  </div>
                  <span>Escríbenos por WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 