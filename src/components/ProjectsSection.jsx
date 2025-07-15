import { useState, useEffect } from 'react';
import '../css/projectsSection.css';

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
        image: "/src/assets/Viviendas/Enscape_2025-04-27-22-55-27.JPG"
      },
      {
        id: 2,
        title: "Residencia Contemporánea",
        description: "Hogar moderno con espacios abiertos",
        image: "/src/assets/Viviendas/20.JPG"
      },
      {
        id: 3,
        title: "Villa Moderna",
        description: "Diseño arquitectónico de lujo",
        image: "/src/assets/Viviendas/Enscape_2025-04-27-22-46-55.JPG"
      },
      {
        id: 4,
        title: "Casa Unifamiliar",
        description: "Espacios amplios y luminosos",
        image: "/src/assets/Viviendas/23.JPG"
      },
      {
        id: 5,
        title: "Residencia Ejecutiva",
        description: "Elegancia y funcionalidad",
        image: "/src/assets/Viviendas/28.JPG"
      },
      {
        id: 6,
        title: "Casa Conceptual",
        description: "Arquitectura innovadora",
        image: "/src/assets/Viviendas/Enscape_2025-04-27-22-53-25.JPG"
      },
      {
        id: 7,
        title: "Residencia Premium",
        description: "Diseño exclusivo y sofisticado",
        image: "/src/assets/Viviendas/E21.JPG"
      },
      {
        id: 8,
        title: "Casa Futurista",
        description: "Vanguardia arquitectónica",
        image: "/src/assets/Viviendas/30.JPG"
      }
    ],
    interiorismo: [
      {
        id: 9,
        title: "Sala de Estar Elegante",
        description: "Espacios interiores cálidos y sofisticados",
        image: "/src/assets/Interiorismo/playa1.JPG"
      },
      {
        id: 10,
        title: "Cocina Minimalista",
        description: "Diseño funcional y estético",
        image: "/src/assets/Interiorismo/c2.JPG"
      },
      {
        id: 11,
        title: "Ambiente Costero",
        description: "Diseño inspirado en la playa",
        image: "/src/assets/Interiorismo/playa3.JPG"
      },
      {
        id: 12,
        title: "Departamento Moderno",
        description: "Interiorismo contemporáneo",
        image: "/src/assets/Interiorismo/depin1.JPG"
      },
      {
        id: 13,
        title: "Living Conceptual",
        description: "Espacios de diseño único",
        image: "/src/assets/Interiorismo/6.JPG"
      },
      {
        id: 14,
        title: "Sala Contemporánea",
        description: "Elegancia en cada detalle",
        image: "/src/assets/Interiorismo/c4.JPG"
      },
      {
        id: 15,
        title: "Ambiente de Playa",
        description: "Relajación y estilo",
        image: "/src/assets/Interiorismo/playa4.JPG"
      },
      {
        id: 16,
        title: "Espacio Moderno",
        description: "Diseño y funcionalidad",
        image: "/src/assets/Interiorismo/depin4.JPG"
      }
    ],
    mobiliario: [
      {
        id: 17,
        title: "Mesa de Diseño Industrial",
        description: "Muebles personalizados y funcionales",
        image: "/src/assets/Mobiliario/10.JPG"
      },
      {
        id: 18,
        title: "Cocina Contemporánea",
        description: "Diseño moderno y funcional",
        image: "/src/assets/Mobiliario/8.JPG"
      },
      {
        id: 19,
        title: "Cocina Integral",
        description: "Soluciones completas de cocina",
        image: "/src/assets/Mobiliario/cocina in.JPG"
      },
      {
        id: 20,
        title: "Cocina Premium",
        description: "Diseño de alta gama",
        image: "/src/assets/Mobiliario/cocina in 2.JPG"
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
      // Combinar todos los proyectos para la vista "Todos"
      const allProjectsArray = [
        ...allProjects.vivienda,
        ...allProjects.interiorismo,
        ...allProjects.mobiliario
      ];
      const startIndex = currentPage * itemsPerPage;
      return allProjectsArray.slice(startIndex, startIndex + itemsPerPage);
    } else {
      const categoryProjects = allProjects[activeCategory] || [];
      const startIndex = currentPage * itemsPerPage;
      return categoryProjects.slice(startIndex, startIndex + itemsPerPage);
    }
  };

  const getTotalPages = () => {
    if (activeCategory === 'all') {
      const allProjectsArray = [
        ...allProjects.vivienda,
        ...allProjects.interiorismo,
        ...allProjects.mobiliario
      ];
      return Math.ceil(allProjectsArray.length / itemsPerPage);
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