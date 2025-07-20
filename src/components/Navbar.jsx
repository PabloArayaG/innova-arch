import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';
import innovalogo from '../assets/innovalogo.png';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isServicesPage = location.pathname === '/servicios';

  // Handler para smooth scroll solo en la página home
  const handleHashClick = (e, hash) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Link to="/">
            <img 
              src={innovalogo} 
              alt="Innova Logo" 
              className="navbar-logo"
            />
          </Link>
        </div>
        
        <ul className="navbar-nav">
          <li>
            {isHomePage ? (
              <a 
                href="#home"
                onClick={(e) => handleHashClick(e, '#home')}
              >
                Inicio
              </a>
            ) : (
              <Link to="/" className="navbar-link">Inicio</Link>
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
              <Link to="/#about" className="navbar-link">Nosotros</Link>
            )}
          </li>
          <li>
            <Link 
              to="/servicios" 
              className={`navbar-link ${isServicesPage ? 'active' : ''}`}
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
              <Link to="/#projects" className="navbar-link">Proyectos</Link>
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
              <Link to="/#contact" className="navbar-link">Contacto</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 