import '../css/aboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          {/* Título principal */}
          <h2 className="about-title">
            Diseñamos renders que transforman ideas en realidades visuales impactantes
          </h2>

          {/* Valores principales */}
          <div className="about-values">
            <div className="value-item">
              <div className="value-bullet"></div>
              <span className="value-text">Visualización fotorrealista</span>
            </div>
            <div className="value-item">
              <div className="value-bullet"></div>
              <span className="value-text">Diseño arquitectónico detallado</span>
            </div>
            <div className="value-item">
              <div className="value-bullet"></div>
              <span className="value-text">Entregas puntuales</span>
            </div>
          </div>

          {/* Descripción detallada */}
          <div className="about-description">
            <p>
              Innova Arquitectura busca la creación de proyectos desde planteamiento de diseño hasta propuesta planimétrica, 3D y render final. Nos enfocamos en crear espacios nuevos o rehabilitarlos a través de una combinación de arquitectura y diseño interior donde se pueda llegar a los mejores resultados.
            </p>
            <p>
              Además de combinar arquitectura interiorista nos interesa mantener estrategias sustentables que promuevan una mejor construcción y habilitación de espacios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 