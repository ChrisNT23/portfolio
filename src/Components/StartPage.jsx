import React from "react";
import SplineEmbed from './SplineEmbed.jsx';
import "../styles/StartPage.css";
import NeuralNetworkBackground from "./NeuralNetworkBackground";


function StartPage() {
    const handleDownloadCV = () => {
        // Abre el PDF en una nueva pestaña
        window.open('/files/CV_Christian_Narvaez.pdf', '_blank');
    };
    return (
        <div className="startpage">
             <NeuralNetworkBackground />
  
            <div className="columns">
                {/* Columna 1: Información personal */}
                <div className="column content">
                    <p className="greeting">
                        Hola, soy <span className="name">Christian</span>
                    </p>
                    <h1 className="title">Software Engineer</h1>
                    <p className="description">
                        Soy <span className="highlight">Ingeniero de Software</span>,
                        desarrollador y analista QA
                    </p>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/christian-narv%C3%A1ez-9a5232247/" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/linkedin.svg" alt="LinkedIn" className="icon" />
                        </a>
                        <a href="https://github.com/ChrisNT23" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/github.svg" alt="GitHub" className="icon" />
                        </a>
                        <a href="mailto:christian@example.com">
                            <img src="/icons/gmail.svg" alt="Email" className="icon" />
                        </a>
                    </div>
                    {/* Botón de Descargar CV */}
                    <div className="download-cv">
                        <button onClick={handleDownloadCV} className="cv-button">
                            Descargar CV
                        </button>
                    </div>
                </div>

                {/* Columna 2: Animación Spline */}
                <div className="column spline-container">
                    <SplineEmbed />
                </div>
            </div>


            {/* Nueva sección de Tecnologías */}
            <div className="technologies-section">
                <div className="carousel">
                    <p className="carousel-text">
                        ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS                     ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS
                        ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS

                    </p>
                </div>
                <div className="technologies-grid">
                    <div className="technology-card">
                        <img src="/icons/icons8-html-5-512.png" alt="HTML" className="tech-icon" />
                        HTML
                    </div>
                    <div className="technology-card">
                        <img src="/icons/cssicon.png" alt="CSS" className="tech-icon" />
                        CSS
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-javascript-512.png" alt="JavaScript" className="tech-icon" />
                        JavaScript
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-reaccionar-nativo-512.png" alt="React" className="tech-icon" />
                        React
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-expresar-js-512.png" alt="Express.js" className="tech-icon" />
                        Express.js
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-tailwind-css-512.png" alt="Tailwind" className="tech-icon" />
                        Tailwind
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-git-512.png" alt="Git" className="tech-icon" />
                        Git
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-figura-512.png" alt="Figma" className="tech-icon" />
                        Figma
                    </div>
                    <div className="technology-card">
                        <img src="/icons/selenium.png" alt="Selenium" className="tech-icon" />
                        Selenium
                    </div>
                    <div className="technology-card">
                        <img src="/icons/cucumber-logo-black-and-white.png" alt="Cucumber" className="tech-icon" />
                        Cucumber
                    </div>
                    <div className="technology-card">
                        <img src="/icons/apachejmeter.svg" alt="Jmeter" className="tech-icon" />
                        Jmeter
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-angular-512.png" alt="Angular" className="tech-icon" />
                        Angular
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-vuetificar-512.png" alt="Vue.js" className="tech-icon" />
                        Vue.js
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-cartero-api-512.png" alt="Postman" className="tech-icon" />
                        Postman
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-python-512.png" alt="Python" className="tech-icon" />
                        Python
                    </div>
                    <div className="technology-card">
                        <img src="/icons/jira.png" alt="Jira" className="tech-icon" />
                        Jira
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-mysql-512.png" alt="MySQL" className="tech-icon" />
                        MySQL
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-firebase-512.png" alt="Firebase" className="tech-icon" />
                        Firebase
                    </div>
                    <div className="technology-card">
                        <img src="/icons/mongodb-icon-size_512.png" alt="MongoDB" className="tech-icon" />
                        MongoDB
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-postgresql-512.png" alt="PostgreSQL" className="tech-icon" />
                        PostgreSQL
                    </div>
                </div>
            </div>


            <div className="technologies-section">
                <div className="carousel">
                    <p className="carousel-text">
                        ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS  ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS                     ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS
                        ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS  ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS ★ SOFT SKILLS

                    </p>
                </div>
                <div className="technologies-grid">
                    <div className="technology-card">
                        <img src="/icons/icons8-html-5-512.png" alt="HTML" className="tech-icon" />
                        Pensamiento analítico
                    </div>
                    <div className="technology-card">
                        <img src="/icons/cssicon.png" alt="CSS" className="tech-icon" />
                        Atención al detalle
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-javascript-512.png" alt="JavaScript" className="tech-icon" />
                        Resolución de problemas
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-reaccionar-nativo-512.png" alt="React" className="tech-icon" />
                        Gestión del tiempo
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-expresar-js-512.png" alt="Express.js" className="tech-icon" />
                        Trabajo en equipo
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-tailwind-css-512.png" alt="Tailwind" className="tech-icon" />
                        Comunicación efectiva
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-git-512.png" alt="Git" className="tech-icon" />
                        Adaptabilidad 
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-figura-512.png" alt="Figma" className="tech-icon" />
                        Liderazgo y toma de decisiones
                    </div>
                    <div className="technology-card">
                        <img src="/icons/selenium.png" alt="Selenium" className="tech-icon" />
                        Mentalidad de mejora continua
                    </div>
                    <div className="technology-card">
                        <img src="/icons/cucumber-logo-black-and-white.png" alt="Cucumber" className="tech-icon" />
                        Proactividad 
                    </div>
                    <div className="technology-card">
                        <img src="/icons/apachejmeter.svg" alt="Jmeter" className="tech-icon" />
                        Paciencia 
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-angular-512.png" alt="Angular" className="tech-icon" />
                        Aprendizaje rápido
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-vuetificar-512.png" alt="Vue.js" className="tech-icon" />
                        Empatía 
                    </div>
                    <div className="technology-card">
                        <img src="/icons/icons8-vuetificar-512.png" alt="Vue.js" className="tech-icon" />
                        Perseverancia 
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default StartPage;
