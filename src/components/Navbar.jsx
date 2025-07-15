import '../css/navbar.css';
import innovalogo from '../assets/innovalogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img 
            src={innovalogo} 
            alt="Innova Logo" 
            className="navbar-logo"
          />
        </div>
        
        <ul className="navbar-nav">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#about">Nosotros</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 