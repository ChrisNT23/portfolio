// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./Components/StartPage"; // Asegúrate de que la ruta sea correcta
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import PdfViewer from "./Components/PdfViewer"; // Nuevo componente para el PDF

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal con todas las secciones */}
        <Route
          path="/"
          element={
            <div>
               <Header />
              <StartPage />              
              <Projects />
              <About />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* Ruta para la vista del PDF */}
        <Route path="/files/CV_Christian_Narvaez.pdf" element={<PdfViewer />} />      </Routes>
    </Router>
  );
}

export default App;
