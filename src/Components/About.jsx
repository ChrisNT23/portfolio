import React from "react";
import '../styles/About.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h1 className="title1">Sobre mí</h1>
        <p className="description1">
          ¡Hola!, Soy Christian Narváez, desarrollador apasionado con experiencia en la creación de aplicaciones web y videojuegos. Actualmente, me desempeño como analista QA, con más de 2 años de experiencia en pruebas de aplicaciones web y móviles, reporte de bugs y seguimiento de funcionalidades. Mi enfoque está en asegurar la calidad del software y en desarrollar soluciones innovadoras.
          <br />
          <br />
        </p>

        <section className="experience-section">
          <h2 className="section-title">Formación y experiencia</h2>

          <div className="experience-item">
            <div className="icon1 freelance-icon"></div>
            <div>
              <h3 className="item-title">Analista QA | KrugerCorporation S.A.S</h3>
              <span className="item-date">2023 - Actualidad</span>
              <p className="item-description">Realización de casos de prueba</p>
              <p className="item-description">Diseño y planificación de pruebas</p>
              <p className="item-description">Automatización de procesos usando Selenium y Cucumber</p>
              <p className="item-description">Pruebas funcionales y no funcionales</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon1 education-icon"></div>
            <div>
              <h3 className="item-title">Master Inteligencia Artificial Aplicada</h3>
              <span className="item-date">2025 - Actualidad</span>
              <p className="item-description">
                Estudiante de la maestría en inteligencia artificial aplicada (UDLA)
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="icon1 education-icon"></div>
            <div>
              <h3 className="item-title">Ingeniería de Software</h3>
              <span className="item-date">2020 - 2024</span>
              <p className="item-description">
                Graduado de la carrera de Ingeniería de Software en la Universidad de las Américas (UDLA)
              </p>
            </div>
          </div>

        </section>
      </div>
    </section>
  );
};

export default About;
