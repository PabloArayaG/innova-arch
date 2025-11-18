
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  // Handler para smooth scroll a la sección de proyectos
  const handleVerProyectos = () => {
    const proyectosElement = document.querySelector('#projects');
    if (proyectosElement) {
      proyectosElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animaciones GSAP elegantes al cargar
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Configuración inicial - elementos ocultos con efectos sutiles
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 30,
        filter: "blur(6px)"
      });

      // Timeline principal con animaciones de velocidad media
      const tl = gsap.timeline({ delay: 0.5 }); // Delay reducido

      // Animación del título "Innova" - velocidad media
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power2.out"
      })
      // Animación del subtítulo "ARQUITECTURA" - velocidad media
      .to(subtitleRef.current, {
        opacity: 0.8,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out"
      }, "-=0.8")
      // Animación del botón - completamente fluida
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power1.out"
      }, "-=0.7");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
<div ref={heroRef} id="home" style={{ 
    position: 'relative',
    width: '100%', 
    height: '100vh', 
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    background: '#000'
}}>
    {/* Video Background */}
    <video
    style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        minWidth: '100%', 
        minHeight: '100%', 
        width: 'auto',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 1
    }}
    src="/hero-video.webm"
    autoPlay
    loop
    muted
    playsInline
    controls={false}
    disablePictureInPicture
    onEnded={(e) => {
        e.target.currentTime = 0;
        e.target.play();
    }}
    />
    
    {/* Overlay minimalista */}
    <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2
    }}></div>
    
    {/* Contenido minimalista */}
    <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3,
    textAlign: 'center',
    color: 'white',
    width: '100%',
    maxWidth: '800px',
    padding: '0 40px'
    }}>
    {/* Título minimalista */}
    <h1 ref={titleRef} style={{
        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
        fontWeight: '300',
        marginBottom: '1rem',
        lineHeight: '1.1',
        letterSpacing: '0.4rem',
        fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
        textShadow: '2px 2px 20px rgba(0,0,0,0.9)',
        opacity: 0,
        transform: 'translateY(30px)',
        filter: 'blur(6px)'
    }}>
        Innova
    </h1>
    
    <div ref={subtitleRef} style={{
        fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
        fontWeight: '200',
        letterSpacing: '0.25rem',
        opacity: 0,
        marginBottom: '3rem',
        textShadow: '1px 1px 10px rgba(0,0,0,0.8)',
        transform: 'translateY(30px)',
        filter: 'blur(6px)'
    }}>
        ARQUITECTURA
    </div>
    
    {/* Botón minimalista */}
    <button 
    ref={buttonRef}
    onClick={handleVerProyectos}
    style={{
        backgroundColor: 'transparent',
        color: 'white',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '1rem 3rem',
        fontSize: '1rem',
        fontWeight: '300',
        borderRadius: '8px',
        cursor: 'pointer',
        letterSpacing: '0.2rem',
        textTransform: 'uppercase',
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.05)',
        opacity: 0,
        transform: 'translateY(30px)',
        filter: 'blur(6px)'
    }}
    onMouseEnter={(e) => {
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)';
        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
        e.target.style.transition = 'border-color 0.3s ease, background 0.3s ease';
    }}
    onMouseLeave={(e) => {
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
        e.target.style.transition = 'border-color 0.3s ease, background 0.3s ease';
    }}>
        Ver Proyectos
    </button>
    </div>
</div>
);
};

export default HeroSection; 