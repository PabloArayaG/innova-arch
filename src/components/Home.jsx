import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from './HeroSection';
import TeaserSection from './TeaserSection';
import AboutSection from './AboutSection';
import ProcessSection from './ProcessSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Si hay un scrollTo en el state, hacer scroll directo a esa sección
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      // Usar requestAnimationFrame para asegurar que el DOM esté listo
      requestAnimationFrame(() => {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }, [location.state]);

  return (
    <>
      <HeroSection />
      <TeaserSection />
      <AboutSection />
      <ProcessSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home; 