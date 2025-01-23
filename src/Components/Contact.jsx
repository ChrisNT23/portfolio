import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-left">
        <h2>TRABAJEMOS JUNTOS</h2>
        <a href="mailto:crisarielnarvaezt@gmail.com" className="contact-button">
          Contáctame ↗
        </a>
      </div>
      <div className="contact-right">
        <h3>REDES SOCIALES</h3>
        <ul className="social-links">
          <li><a href="https://github.com/ChrisNT23" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/christian-narv%C3%A1ez-9a5232247/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
