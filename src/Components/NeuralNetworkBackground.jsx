import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const NeuralNetworkBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true, // Asegura que las partículas cubran toda la pantalla
          zIndex: -1, // Lo mantiene en el fondo
        },
        background: {
          color: "transparent", // Fondo transparente para no tapar contenido
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#000", // Color de las conexiones
          },
          links: {
            color: "#000",
            distance: 150,
            enable: true,
            opacity: 0.20,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default NeuralNetworkBackground;
