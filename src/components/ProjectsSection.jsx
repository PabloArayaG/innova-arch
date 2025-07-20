import { useState, useEffect } from 'react';
import '../css/projectsSection.css';

// Imports para imágenes de Viviendas
import vivienda1 from '../assets/Viviendas/Enscape_2025-04-27-22-55-27.JPG';
import vivienda2 from '../assets/Viviendas/20.JPG';
import vivienda3 from '../assets/Viviendas/Enscape_2025-04-27-22-46-55.JPG';
import vivienda4 from '../assets/Viviendas/23.JPG';
import vivienda5 from '../assets/Viviendas/28.JPG';
import vivienda6 from '../assets/Viviendas/Enscape_2025-04-27-22-53-25.JPG';
import vivienda7 from '../assets/Viviendas/E21.JPG';
import vivienda8 from '../assets/Viviendas/30.JPG';
import vivienda9 from '../assets/Viviendas/Enscape_2025-04-27-22-56-56.JPG';
import vivienda10 from '../assets/Viviendas/Enscape_2025-05-02-19-55-3221.JPG';
import vivienda11 from '../assets/Viviendas/Enscape_2025-05-04-21-00-1630.JPG';

// Imports para imágenes de Interiorismo
import interiorismo1 from '../assets/Interiorismo/playa1.JPG';
import interiorismo2 from '../assets/Interiorismo/c2.JPG';
import interiorismo3 from '../assets/Interiorismo/playa3.JPG';
import interiorismo4 from '../assets/Interiorismo/depin1.JPG';
import interiorismo5 from '../assets/Interiorismo/6.JPG';
import interiorismo6 from '../assets/Interiorismo/c4.JPG';
import interiorismo7 from '../assets/Interiorismo/playa4.JPG';
import interiorismo8 from '../assets/Interiorismo/depin4.JPG';
import interiorismo9 from '../assets/Interiorismo/depin5.JPG';
import interiorismo10 from '../assets/Interiorismo/11.JPG';
import interiorismo11 from '../assets/Interiorismo/12.JPG';
import interiorismo12 from '../assets/Interiorismo/14.JPG';
import interiorismo13 from '../assets/Interiorismo/IMG_2797.JPG';
import interiorismo14 from '../assets/Interiorismo/IMG_2798.JPG';
import interiorismo15 from '../assets/Interiorismo/IMG_2799.JPG';
import interiorismo16 from '../assets/Interiorismo/new 3.JPG';

// Imports para imágenes de Mobiliario
import mobiliario1 from '../assets/Mobiliario/10.JPG';
import mobiliario2 from '../assets/Mobiliario/8.JPG';
import mobiliario3 from '../assets/Mobiliario/cocina in.JPG';
import mobiliario4 from '../assets/Mobiliario/cocina in 2.JPG';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const itemsPerPage = 6;

  const allProjects = {
    vivienda: [
      {
        id: 1,
        title: "Casa Moderna Minimalista",
        description: "Arquitectura contemporánea con líneas limpias",
        image: vivienda1
      },
      {
        id: 2,
        title: "Residencia Contemporánea",
        description: "Hogar moderno con espacios abiertos",
        image: vivienda2
      },
      {
        id: 3,
        title: "Villa Moderna",
        description: "Diseño arquitectónico de lujo",
        image: vivienda3
      },
      {
        id: 4,
        title: "Casa Unifamiliar",
        description: "Espacios amplios y luminosos",
        image: vivienda4
      },
      {
        id: 5,
        title: "Residencia Ejecutiva",
        description: "Elegancia y funcionalidad",
        image: vivienda5
      },
      {
        id: 6,
        title: "Casa Conceptual",
        description: "Arquitectura innovadora",
        image: vivienda6
      },
      {
        id: 7,
        title: "Residencia Premium",
        description: "Diseño exclusivo y sofisticado",
        image: vivienda7
      },
      {
        id: 8,
        title: "Casa Futurista",
        description: "Vanguardia arquitectónica",
        image: vivienda8
      },
      {
        id: 9,
        title: "Casa Moderna Premium",
        description: "Diseño innovador y funcional",
        image: vivienda9
      },
      {
        id: 10,
        title: "Residencia Exclusiva",
        description: "Arquitectura de alta gama",
        image: vivienda10
      },
      {
        id: 11,
        title: "Villa Contemporánea",
        description: "Espacios amplios y modernos",
        image: vivienda11
      }
    ],
    interiorismo: [
      {
        id: 12,
        title: "Sala de Estar Elegante",
        description: "Espacios interiores cálidos y sofisticados",
        image: interiorismo1
      },
      {
        id: 13,
        title: "Cocina Minimalista",
        description: "Diseño funcional y estético",
        image: interiorismo2
      },
      {
        id: 14,
        title: "Ambiente Costero",
        description: "Diseño inspirado en la playa",
        image: interiorismo3
      },
      {
        id: 15,
        title: "Departamento Moderno",
        description: "Interiorismo contemporáneo",
        image: interiorismo4
      },
      {
        id: 16,
        title: "Living Conceptual",
        description: "Espacios de diseño único",
        image: interiorismo5
      },
      {
        id: 17,
        title: "Sala Contemporánea",
        description: "Elegancia en cada detalle",
        image: interiorismo6
      },
      {
        id: 18,
        title: "Ambiente de Playa",
        description: "Relajación y estilo",
        image: interiorismo7
      },
      {
        id: 19,
        title: "Espacio Moderno",
        description: "Diseño y funcionalidad",
        image: interiorismo8
      },
      {
        id: 20,
        title: "Departamento Elegante",
        description: "Interiorismo sofisticado",
        image: interiorismo9
      },
      {
        id: 21,
        title: "Sala de Estar Premium",
        description: "Diseño interior de lujo",
        image: interiorismo10
      },
      {
        id: 22,
        title: "Ambiente Acogedor",
        description: "Calidez y elegancia",
        image: interiorismo11
      },
      {
        id: 23,
        title: "Espacio Multifuncional",
        description: "Versatilidad y diseño",
        image: interiorismo12
      },
      {
        id: 24,
        title: "Living Moderno",
        description: "Espacios contemporáneos",
        image: interiorismo13
      },
      {
        id: 25,
        title: "Sala Minimalista",
        description: "Simplicidad y sofisticación",
        image: interiorismo14
      },
      {
        id: 26,
        title: "Ambiente Exclusivo",
        description: "Diseño único y personal",
        image: interiorismo15
      },
      {
        id: 27,
        title: "Espacio Innovador",
        description: "Creatividad en cada detalle",
        image: interiorismo16
      }
    ],
    mobiliario: [
      {
        id: 28,
        title: "Mesa de Diseño Industrial",
        description: "Muebles personalizados y funcionales",
        image: mobiliario1
      },
      {
        id: 29,
        title: "Cocina Contemporánea",
        description: "Diseño moderno y funcional",
        image: mobiliario2
      },
      {
        id: 30,
        title: "Cocina Integral",
        description: "Soluciones completas de cocina",
        image: mobiliario3
      },
      {
        id: 31,
        title: "Cocina Premium",
        description: "Diseño de alta gama",
        image: mobiliario4
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'vivienda', name: 'Vivienda' },
    { id: 'interiorismo', name: 'Interiorismo' },
    { id: 'mobiliario', name: 'Mobiliario' }
  ];

  const getCurrentProjects = () => {
    if (activeCategory === 'all') {
      // Combinar todos los proyectos mezclados para la vista "Todos"
      const allProjectsArray = [];
      const maxLength = Math.max(
        allProjects.vivienda.length,
        allProjects.interiorismo.length,
        allProjects.mobiliario.length
      );
      
      // Mezclar proyectos intercalando categorías
      for (let i = 0; i < maxLength; i++) {
        if (i < allProjects.vivienda.length) allProjectsArray.push(allProjects.vivienda[i]);
        if (i < allProjects.interiorismo.length) allProjectsArray.push(allProjects.interiorismo[i]);
        if (i < allProjects.mobiliario.length) allProjectsArray.push(allProjects.mobiliario[i]);
      }
      
      const startIndex = currentPage * itemsPerPage;
      return allProjectsArray.slice(startIndex, startIndex + itemsPerPage);
    } else {
      const categoryProjects = allProjects[activeCategory] || [];
      
      // Para vivienda, mostrar en orden diferente (empezar desde el proyecto más reciente)
      if (activeCategory === 'vivienda') {
        const reorderedProjects = [...categoryProjects].reverse();
        const startIndex = currentPage * itemsPerPage;
        return reorderedProjects.slice(startIndex, startIndex + itemsPerPage);
      }
      
      const startIndex = currentPage * itemsPerPage;
      return categoryProjects.slice(startIndex, startIndex + itemsPerPage);
    }
  };

  const getTotalPages = () => {
    if (activeCategory === 'all') {
      const totalProjects = allProjects.vivienda.length + 
                           allProjects.interiorismo.length + 
                           allProjects.mobiliario.length;
      return Math.ceil(totalProjects / itemsPerPage);
    }
    const categoryProjects = allProjects[activeCategory] || [];
    return Math.ceil(categoryProjects.length / itemsPerPage);
  };

  const nextPage = () => {
    const totalPages = getTotalPages();
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(0);
  };

  const openModal = (project) => {
    setSelectedImage(project);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const filteredProjects = getCurrentProjects();

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <p className="projects-subtitle">
            Renders fotorrealistas que materializan ideas arquitectónicas con precisión técnica y calidad visual
          </p>
        </div>

        {/* Filtros de categorías */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item" onClick={() => openModal(project)}>
              <img 
                src={project.image} 
                alt={project.title}
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <div className="portfolio-category">
                  {categories.find(cat => cat.id === activeCategory)?.name}
                </div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        {getTotalPages() > 1 && (
          <div className="navigation-controls">
            <button 
              className="nav-arrow nav-arrow-left" 
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              ←
            </button>
            <span className="page-indicator">
              {currentPage + 1} / {getTotalPages()}
            </span>
            <button 
              className="nav-arrow nav-arrow-right" 
              onClick={nextPage}
              disabled={currentPage === getTotalPages() - 1}
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h3 className="modal-title">{selectedImage.title}</h3>
              <p className="modal-description">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection; 