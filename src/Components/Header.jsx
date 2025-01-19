import React from "react";
import '../styles/Header.css';  // Ahora la ruta es '../styles/Header.css'

function Header() {
  return (
    <header>      
      <nav>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
