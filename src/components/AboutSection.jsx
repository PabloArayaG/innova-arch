import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/aboutSection.css';

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const valuesRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Configuración inicial - elementos ocultos
      gsap.set([titleRef.current, valuesRef.current, descriptionRef.current], {
        opacity: 0,
        y: 40,
        filter: "blur(8px)"
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
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 2.5,
        ease: "power2.out"
      })
      // Animación de los valores
      .to(valuesRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 2,
        ease: "power2.out"
      }, "-=1.5")
      // Animación de la descripción
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.8,
        ease: "power2.out"
      }, "-=1");

    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          {/* Título principal */}
          <h2 ref={titleRef} className="about-title">
            Diseñamos renders que transforman ideas en realidades visuales impactantes
          </h2>

          {/* Valores principales */}
          <div ref={valuesRef} className="about-values">
            <div className="value-item">
              <div className="value-bullet"></div>
              <span className="value-text">Visualización fotorrealista</span>
            </div>
            <div className="value-item">
              <div className="value-bullet"></div>
              <span className="value-text">Diseño arquitectónico detallado</span>
            </div>
            <div className="value-item">
              <div className="value-bullet"></div>
              <span className="value-text">Entregas puntuales</span>
            </div>
          </div>

          {/* Descripción detallada */}
          <div ref={descriptionRef} className="about-description">
            <p>
              Innova Arquitectura busca la creación de proyectos desde planteamiento de diseño hasta propuesta planimétrica, 3D y render final. Nos enfocamos en crear espacios nuevos o rehabilitarlos a través de una combinación de arquitectura y diseño interior donde se pueda llegar a los mejores resultados.
            </p>
            <p>
              Además de combinar arquitectura interiorista nos interesa mantener estrategias sustentables que promuevan una mejor construcción y habilitación de espacios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 