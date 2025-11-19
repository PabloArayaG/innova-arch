import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '../css/services.css';

// Importar imágenes para cada servicio
import arquitecturaImg from '../assets/Viviendas/Enscape_2025-04-27-22-55-27.JPG';
import interioristaImg from '../assets/Interiorismo/IMG_2797.JPG';
import planimetriaImg from '../assets/Viviendas/20.JPG';
import modelado3dImg from '../assets/Viviendas/Enscape_2025-05-02-19-55-3221.JPG';

// Hook personalizado para animaciones en scroll
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Desconectar el observer una vez que el elemento es visible
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Se activa cuando 20% del elemento es visible
        rootMargin: '-50px 0px -50px 0px' // Margen para activar la animación un poco antes
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const Services = () => {
  const navigate = useNavigate();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [service1Ref, service1Visible] = useScrollAnimation();
  const [service2Ref, service2Visible] = useScrollAnimation();
  const [service3Ref, service3Visible] = useScrollAnimation();
  const [service4Ref, service4Visible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  // Handler para navegar a contacto
  const handleContactClick = (e) => {
    e.preventDefault();
    // Navegar con state para indicar que queremos ir a contacto
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <div className="services-page">
      <div className="services-container">
        {/* Header de la página */}
        <div 
          ref={headerRef}
          className={`services-header ${headerVisible ? 'animate-in' : ''}`}
        >
          <h1 className="services-title">
            Nuestros Servicios
          </h1>
          <p className="services-description">
            En Innova Arquitectura ofrecemos servicios especializados en diseño arquitectónico y visualización 3D para dar vida a tus proyectos.
          </p>
        </div>

        {/* Servicios con diseño alternado */}
        <div className="services-content">
          
          {/* Servicio 1: Arquitectura - Texto IZQUIERDA, imagen derecha */}
          <div 
            ref={service1Ref}
            className={`service-section service-left ${service1Visible ? 'animate-in' : ''}`}
          >
            <div className="service-text">
              <h2>Arquitectura</h2>
              <p>Desarrollo completo de proyectos arquitectónicos desde la conceptualización hasta la planificación detallada, creando espacios funcionales y estéticamente atractivos que transforman ideas en realidades habitables.</p>
            </div>
            <div className="service-image">
              <img src={arquitecturaImg} alt="Proyecto arquitectónico" />
              <div className="service-image-overlay"></div>
            </div>
          </div>

          {/* Servicio 2: Arquitectura Interiorista - Texto DERECHA, imagen izquierda */}
          <div 
            ref={service2Ref}
            className={`service-section service-right ${service2Visible ? 'animate-in' : ''}`}
          >
            <div className="service-image">
              <img src={interioristaImg} alt="Diseño interior" />
              <div className="service-image-overlay"></div>
            </div>
            <div className="service-text">
              <h2>Arquitectura Interiorista</h2>
              <p>Diseño integral de espacios interiores que combina funcionalidad y estética, optimizando cada ambiente para crear experiencias únicas que reflejen el estilo y las necesidades de nuestros clientes.</p>
            </div>
          </div>

          {/* Servicio 3: Planimetría - Texto IZQUIERDA, imagen derecha */}
          <div 
            ref={service3Ref}
            className={`service-section service-left ${service3Visible ? 'animate-in' : ''}`}
          >
            <div className="service-text">
              <h2>Diseño de Planimetría</h2>
              <p>Elaboración de planos técnicos precisos y detallados, incluyendo plantas arquitectónicas, cortes, fachadas y especificaciones técnicas necesarias para la construcción exitosa de cualquier proyecto.</p>
            </div>
            <div className="service-image">
              <img src={planimetriaImg} alt="Planos arquitectónicos" />
              <div className="service-image-overlay"></div>
            </div>
          </div>

          {/* Servicio 4: Modelado 3D - Texto DERECHA, imagen izquierda */}
          <div 
            ref={service4Ref}
            className={`service-section service-right ${service4Visible ? 'animate-in' : ''}`}
          >
            <div className="service-image">
              <img src={modelado3dImg} alt="Render 3D fotorrealista" />
              <div className="service-image-overlay"></div>
            </div>
            <div className="service-text">
              <h2>Diseño de Modelado 3D (CGI)</h2>
              <p>Creación de renders fotorrealistas y modelado 3D de alta calidad que permiten visualizar proyectos con total precisión antes de su construcción, facilitando la toma de decisiones y comunicación con clientes.</p>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div 
          ref={ctaRef}
          className={`services-cta ${ctaVisible ? 'animate-in' : ''}`}
        >
          <a 
            href="/#contact" 
            className="services-contact-btn"
            onClick={handleContactClick}
          >
            Solicitar Cotización
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
