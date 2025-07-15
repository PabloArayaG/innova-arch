import '../css/processSection.css';

const ProcessSection = () => {
  return (
    <section className="process-section" id="proceso">
      <div className="process-container">
        <div className="process-content">
          {/* Título principal */}
          <h2 className="process-title">
            ¿Cómo lo hacemos?
          </h2>

          {/* Pasos del proceso */}
          <div className="process-steps">
            <div className="step-item">
              <div className="step-icon step-icon-brief">
                <div className="icon-shape"></div>
              </div>
              <div className="step-content">
                <h3 className="step-title">Brief del cliente</h3>
                <p className="step-description">
                  Análisis detallado de requerimientos y objetivos del proyecto
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-icon step-icon-design">
                <div className="icon-shape"></div>
              </div>
              <div className="step-content">
                <h3 className="step-title">Diseño y revisión</h3>
                <p className="step-description">
                  Desarrollo conceptual y ajustes iterativos hasta lograr la visión perfecta
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-icon step-icon-delivery">
                <div className="icon-shape"></div>
              </div>
              <div className="step-content">
                <h3 className="step-title">Entrega final (renders HD)</h3>
                <p className="step-description">
                  Renders fotorrealistas en alta resolución listos para presentación
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 