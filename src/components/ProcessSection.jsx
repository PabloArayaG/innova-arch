import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/processSection.css';

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef([]);

  // Función para dividir en caracteres manteniendo palabras íntegras
  const splitTextIntoChars = (element) => {
    if (!element) return [];
    
    const text = element.textContent;
    const words = text.split(' ');
    element.innerHTML = '';
    
    const chars = [];
    
    words.forEach((word, wordIndex) => {
      // Crear contenedor por palabra que permite wrap pero no corta la palabra
      const wordContainer = document.createElement('span');
      wordContainer.style.display = 'inline-block';
      wordContainer.style.whiteSpace = 'nowrap';
      wordContainer.style.verticalAlign = 'top';
      
      // Dividir la palabra en caracteres individuales
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.display = 'inline-block';
        charSpan.style.opacity = '0';
        charSpan.style.transform = 'translateY(20px)';
        charSpan.style.filter = 'blur(4px)';
        
        wordContainer.appendChild(charSpan);
        chars.push(charSpan);
      }
      
      element.appendChild(wordContainer);
      
      // Agregar espacio entre palabras que permite wrap (excepto la última)
      if (wordIndex < words.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.innerHTML = ' ';
        spaceSpan.style.display = 'inline';
        spaceSpan.style.whiteSpace = 'normal';
        element.appendChild(spaceSpan);
      }
    });
    
    return chars;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dividir el título principal en caracteres
      const titleChars = splitTextIntoChars(titleRef.current);

      // Dividir textos de cada paso en caracteres
      const stepTextElements = [];
      stepsRef.current.forEach((step, stepIndex) => {
        if (step) {
          // Ocultar el contenedor del paso inicialmente
          gsap.set(step, {
            visibility: 'hidden'
          });

          const title = step.querySelector('.step-title');
          const description = step.querySelector('.step-description');
          const icon = step.querySelector('.step-icon');

          // Configurar ícono
          if (icon) {
            gsap.set(icon, {
              opacity: 0,
              scale: 0.5,
              rotation: -10
            });
          }

          if (title && description) {
            const titleChars = splitTextIntoChars(title);
            const descriptionChars = splitTextIntoChars(description);
            
            stepTextElements.push({
              stepIndex,
              icon,
              titleChars,
              descriptionChars,
              container: step
            });
          }
        }
      });

      // Timeline principal con ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      // 1. Animar título principal letra por letra
      tl.to(titleChars, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.05,
        stagger: 0.03,
        ease: "power2.out"
      });

      // 2. Animar cada paso secuencialmente
      stepTextElements.forEach((stepData) => {
        // Mostrar contenedor del paso
        tl.set(stepData.container, {
          visibility: 'visible'
        }, `+=0.2`)
        
        // Animar ícono
        .to(stepData.icon, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "back.out(1.7)"
        }, `<`)
        
        // Animar título del paso letra por letra
        .to(stepData.titleChars, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.04,
          stagger: 0.02,
          ease: "power2.out"
        }, `<+0.1`)
        
        // Animar descripción letra por letra
        .to(stepData.descriptionChars, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.03,
          stagger: 0.015,
          ease: "power2.out"
        }, `<+0.2`);
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: "step-icon-brief",
      title: "Brief del cliente",
      description: "Análisis detallado de requerimientos y objetivos del proyecto"
    },
    {
      icon: "step-icon-design", 
      title: "Diseño y revisión",
      description: "Desarrollo conceptual y ajustes iterativos hasta lograr la visión perfecta"
    },
    {
      icon: "step-icon-delivery",
      title: "Entrega final (renders HD)", 
      description: "Renders fotorrealistas en alta resolución listos para presentación"
    }
  ];

  return (
    <section ref={sectionRef} className="process-section" id="proceso">
      <div className="process-container">
        <div className="process-content">
          {/* Título principal */}
          <h2 ref={titleRef} className="process-title">
            ¿Cómo lo hacemos?
          </h2>

          {/* Pasos del proceso */}
          <div className="process-steps">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={(el) => stepsRef.current[index] = el}
                className="step-item"
              >
                <div className={`step-icon ${step.icon}`}>
                  <div className="icon-shape"></div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 