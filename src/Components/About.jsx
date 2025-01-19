import React from "react";

const About = () => {
  return (
    <section className="bg-[#f4f2ed] px-8 py-16 md:px-16 md:py-24 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Primera columna: Títulos */}
        <div className="space-y-12">
          <h2 className="text-5xl font-bold text-gray-900">Sobre mí</h2>
          <h3 className="text-4xl font-bold text-gray-900">Experiencia laboral</h3>
        </div>

        {/* Segunda columna: Contenido */}
        <div className="space-y-12">
          {/* Texto de "Sobre mí" */}
          <div className="text-lg leading-relaxed text-gray-700 space-y-6">
            <p>
              ¡Hola! Soy Adrian Palacios, soy Ingeniero de Software y me
              especializo en la creación de interfaces dinámicas y funcionales.
              Me especializo en desarrollo frontend, combinando diseño y
              funcionalidad para crear experiencias web intuitivas.
            </p>
            <p>
              Ahora me encuentro desarrollando webs estáticas y dinámicas,
              trabajando con tecnologías como <strong>React</strong> y{" "}
              <strong>Tailwind</strong>.
            </p>
          </div>

          {/* Texto de "Experiencia laboral" */}
          <div className="space-y-8">
            {/* Ingeniería de Software */}
            <div className="flex items-start gap-6">
              <div className="text-3xl text-gray-600">🎓</div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">
                  Ingeniería de Software
                </h4>
                <span className="text-sm text-gray-500 block">
                  2022 - Actualidad
                </span>
                <p className="text-gray-700 mt-2">
                  Me encuentro estudiando la carrera de Ingeniería de Software
                  en la Universidad Nacional Mayor de San Marcos (UNMSM).
                </p>
              </div>
            </div>

            {/* Freelancing */}
            <div className="flex items-start gap-6">
              <div className="text-3xl text-gray-600">💻</div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">Freelancing</h4>
                <span className="text-sm text-gray-500 block">2023</span>
                <p className="text-gray-700 mt-2">
                  Empecé a trabajar como freelance durante mi tiempo libre a la
                  par que llevo mis estudios, desarrollando páginas web para
                  clientes de distintos rubros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
