// src/App.js
import React from "react";
import StartPage from "./Components/StartPage"; // Asegúrate de que la ruta sea correcta
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <StartPage /> {/* Aquí llamas a StartPage */}
      <Header />      
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
