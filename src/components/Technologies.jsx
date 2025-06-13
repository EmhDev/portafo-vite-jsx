//portafo-vite-jsx/src/components/Technologies.jsx
import React from 'react';
import TechnologyCard from './TechnologyCard'; // Importa el componente hijo TechnologyCard

function Technologies({ data }) { // Recibe los datos de las tecnologías como una prop
  return (
    <section id="technologies" className="py-16 px-8 bg-light-pink">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 section-title">Mis Habilidades y Tecnologías</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapea sobre el array 'data' para crear un TechnologyCard por cada categoría */}
          {data.map((categoryData, index) => (
            <TechnologyCard key={index} category={categoryData.category} icons={categoryData.icons} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;