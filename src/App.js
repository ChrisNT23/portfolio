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
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Empieza opaco y abajo
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={sectionVariants}
              >
                <StartPage />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={sectionVariants}
              >
                <Projects />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={sectionVariants}
              >
                <About />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={sectionVariants}
              >
                <Contact />
              </motion.div>

              <Footer />
            </div>
          }
        />

        <Route path="/files/CV_Christian_Narvaez.pdf" element={<PdfViewer />} />
      </Routes>
    </Router>
  );
}

export default App;