import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/navbar.css';
import innovalogo from '../assets/innovalogo.png';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isServicesPage = location.pathname === '/servicios';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handler para smooth scroll solo en la página home
  const handleHashClick = (e, hash) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Cerrar menú móvil al hacer click en un enlace
    setIsMenuOpen(false);
  };

  // Handler para el click del logo
  const handleLogoClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      // Scroll al hero-section (top de la página)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Toggle menu móvil
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú móvil cuando se cambia de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Link to="/" onClick={handleLogoClick}>
            <img 
              src={innovalogo} 
              alt="Innova Logo" 
              className="navbar-logo"
            />
          </Link>
        </div>

        {/* Botón hamburguesa para móvil */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Menú de navegación */}
        <ul className={`navbar-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            {isHomePage ? (
              <a 
                href="#home"
                onClick={(e) => handleHashClick(e, '#home')}
              >
                Inicio
              </a>
            ) : (
              <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a 
                href="#about"
                onClick={(e) => handleHashClick(e, '#about')}
              >
                Nosotros
              </a>
            ) : (
              <Link to="/#about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
            )}
          </li>
          <li>
            <Link 
              to="/servicios" 
              className={`navbar-link ${isServicesPage ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
          </li>
          <li>
            {isHomePage ? (
              <a 
                href="#projects"
                onClick={(e) => handleHashClick(e, '#projects')}
              >
                Proyectos
              </a>
            ) : (
              <Link to="/#projects" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Proyectos</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a 
                href="#contact"
                onClick={(e) => handleHashClick(e, '#contact')}
              >
                Contacto
              </a>
            ) : (
              <Link to="/#contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            )}
          </li>
        </ul>

        {/* Overlay para menú móvil */}
        {isMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar; 