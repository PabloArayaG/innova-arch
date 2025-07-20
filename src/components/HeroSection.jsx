

const HeroSection = () => {
  // Handler para smooth scroll a la sección de proyectos
  const handleVerProyectos = () => {
    const proyectosElement = document.querySelector('#projects');
    if (proyectosElement) {
      proyectosElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<div id="home" style={{ 
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
    src="/innova.mp4"
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
    <h1 style={{
        fontSize: 'clamp(3rem, 10vw, 6rem)',
        fontWeight: '300',
        marginBottom: '1rem',
        lineHeight: '1.1',
        letterSpacing: '0.5rem',
        fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
        textShadow: '2px 2px 20px rgba(0,0,0,0.9)'
    }}>
        Innova
    </h1>
    
    <div style={{
        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
        fontWeight: '200',
        letterSpacing: '0.3rem',
        opacity: '0.8',
        marginBottom: '3rem',
        textShadow: '1px 1px 10px rgba(0,0,0,0.8)'
    }}>
        ARQUITECTURA
    </div>
    
    {/* Botón minimalista */}
    <button 
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
        transition: 'all 0.3s ease',
        letterSpacing: '0.2rem',
        textTransform: 'uppercase',
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.05)'
    }}
    onMouseEnter={(e) => {
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)';
        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
    }}
    onMouseLeave={(e) => {
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
    }}>
        Ver Proyectos
    </button>
    </div>
</div>
);
};

export default HeroSection; 