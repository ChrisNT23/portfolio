import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">
        <span className="icon-blocks">▧▧</span> Proyectos
      </h2>

      {/* Proyecto 1 */}
      <div className="project">
        <div className="project-info">
          <h3 className="project-title">1. Mikhuna</h3>
          <p className="project-description">
            Aplicación web que te permite gestionar tus rutinas de ejercicios y
            preguntar a un asistente virtual usando la API de OpenAI.
          </p>
          <div className="project-tags">
            <span className="tag"># MySQL</span>
            <span className="tag"># Flask</span>
            <span className="tag"># HTML</span>
            <span className="tag"># CSS</span>
            <span className="tag"># JavaScript</span>
          </div>
        </div>
        <div className="project-image-wrapper">
          <img
            src="mikhuna.png" // Cambia a tu imagen real
            alt="Mikhuna"
            className="project-image"
          />
          <a
            href="#"
            className="project-link"
            aria-label="Ver proyecto Mikhuna"
          >
            <span className="arrow-icon">↗</span>
          </a>
        </div>
      </div>

      {/* Proyecto 2 */}
      <div className="project">
        <div className="project-info">
          <h3 className="project-title">2. EcoTrack</h3>
          <p className="project-description">
            Plataforma para monitorear la huella de carbono en empresas y
            sugerir prácticas sostenibles basadas en datos analíticos.
          </p>
          <div className="project-tags">
            <span className="tag"># React</span>
            <span className="tag"># Node.js</span>
            <span className="tag"># MongoDB</span>
            <span className="tag"># CSS</span>
          </div>
        </div>
        <div className="project-image-wrapper">
          <img
            src="ecotrack-preview.png" // Cambia a tu imagen real
            alt="EcoTrack"
            className="project-image"
          />
          <a
            href="#"
            className="project-link"
            aria-label="Ver proyecto EcoTrack"
          >
            <span className="arrow-icon">↗</span>
          </a>
        </div>
      </div>

      {/* Proyecto 3 */}
      <div className="project">
        <div className="project-info">
          <h3 className="project-title">3. Artify</h3>
          <p className="project-description">
            Aplicación web que permite a artistas crear galerías interactivas
            y compartir sus obras utilizando tecnologías de realidad aumentada.
          </p>
          <div className="project-tags">
            <span className="tag"># Next.js</span>
            <span className="tag"># PostgreSQL</span>
            <span className="tag"># Three.js</span>
            <span className="tag"># CSS</span>
          </div>
        </div>
        <div className="project-image-wrapper">
          <img
            src="artify-preview.png" // Cambia a tu imagen real
            alt="Artify"
            className="project-image"
          />
          <a
            href="#"
            className="project-link"
            aria-label="Ver proyecto Artify"
          >
            <span className="arrow-icon">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
