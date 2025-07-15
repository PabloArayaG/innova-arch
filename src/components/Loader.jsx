import { useState, useEffect } from 'react';
import '../css/loader.css';
import innovalogo from '../assets/innovalogo.png';

const Loader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Llamar a onComplete después de la animación de fade out
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 2500); // Mostrar loader por 2.5 segundos

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loader-container ${!isVisible ? 'fade-out' : ''}`}>
      {/* Líneas arquitectónicas de fondo */}
      <div className="blueprint-lines">
        <div className="blueprint-line horizontal h1"></div>
        <div className="blueprint-line horizontal h2"></div>
        <div className="blueprint-line vertical v1"></div>
        <div className="blueprint-line vertical v2"></div>
      </div>

      {/* Contenido principal */}
      <div className="loader-content">
        <img 
          src={innovalogo} 
          alt="Innova Logo" 
          className="loader-logo"
        />
      </div>
    </div>
  );
};

export default Loader; 