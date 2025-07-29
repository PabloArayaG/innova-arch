import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/teaserSection.css';

// Importar las imágenes seleccionadas
import viviendaImg from '../assets/Viviendas/Enscape_2025-04-27-22-55-27.JPG';
import interiorismoImg from '../assets/Interiorismo/IMG_2797.JPG';
import mobiliarioImg from '../assets/Mobiliario/8.JPG';

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const TeaserSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'Viviendas',
      subtitle: 'Arquitectura residencial',
      image: viviendaImg,
      description: 'Diseños únicos que transforman espacios habitacionales'
    },
    {
      id: 2,
      title: 'Interiorismo',
      subtitle: 'Diseño de interiores',
      image: interiorismoImg,
      description: 'Ambientes sofisticados con identidad propia'
    },
    {
      id: 3,
      title: 'Mobiliario',
      subtitle: 'Elementos personalizados',
      image: mobiliarioImg,
      description: 'Piezas exclusivas que complementan cada proyecto'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Referencias separadas para título y subtítulo
      const titleEl = headerRef.current?.querySelector('.teaser-title');
      const subtitleEl = headerRef.current?.querySelector('.teaser-subtitle');

      // Configuración inicial - elementos ocultos con blur
      gsap.set([titleEl, subtitleEl], {
        opacity: 0,
        y: 40,
        filter: "blur(8px)"
      });

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 60
      });

      // Timeline principal con ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animación difuminada del título
      tl.to(titleEl, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 2.5,
        ease: "power2.out"
      })
      // Animación difuminada del subtítulo
      .to(subtitleEl, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 2,
        ease: "power2.out"
      }, "-=1.5")
      // Animación de las tarjetas con stagger
      .to(cardsRef.current, {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.4,
        ease: "power3.out"
      }, "-=1.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="teaser-section" id="teaser">
      <div className="teaser-container">
        <div ref={headerRef} className="teaser-header">
          <h2 className="teaser-title">Proyectos</h2>
          <p className="teaser-subtitle">
            Una selección de trabajos recientes
          </p>
        </div>
        
        <div className="teaser-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              ref={(el) => cardsRef.current[index] = el}
              className="teaser-card"
            >
              <div className="card-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-subtitle">{project.subtitle}</p>
                <p className="card-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaserSection; 