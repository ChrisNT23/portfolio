import React from "react";
import "../styles/StartPage.css";

function StartPage() {
    return (
        <div className="startpage">
            <div className="content">
                <p className="greeting">
                    Hola, soy <span className="name">Christian Narvaéz</span>
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
            </div>
            {/* Nueva sección de Tecnologías */}
            <div className="technologies-section">
                    <div className="carousel">
                        <p className="carousel-text">
                            TECNOLOGÍAS ★  TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★ TECNOLOGÍAS ★
                        </p>
                    </div>
                    <div className="technologies-grid">
                        <div className="technology-card">HTML</div>
                        <div className="technology-card">CSS</div>
                        <div className="technology-card">JavaScript</div>
                        <div className="technology-card">React</div>
                        <div className="technology-card">Express.js</div>
                        <div className="technology-card">Tailwind</div>
                        <div className="technology-card">Git</div>
                        <div className="technology-card">Figma</div>
                        <div className="technology-card">Selenium</div>
                        <div className="technology-card">Cucumber</div>
                        <div className="technology-card">Jmeter</div>
                        <div className="technology-card">Angular</div>
                        <div className="technology-card">Vue.js</div>
                        <div className="technology-card">Postman</div>
                        <div className="technology-card">Python</div>
                        <div className="technology-card">Jira</div>
                        <div className="technology-card">MySQL</div>
                        <div className="technology-card">Firebase</div>
                        <div className="technology-card">MongoDB</div>
                        <div className="technology-card">PostgreSQL</div>
                       
                        
                    </div>
                </div>
        </div>
    );
}

export default StartPage;
