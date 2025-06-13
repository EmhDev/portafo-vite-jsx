import React from 'react';
import TechIcon from './TechIcon'; // Importa el componente hijo TechIcon

function TechnologyCard({ category, icons }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover-glow card-gradient">
      <h3 className="text-2xl font-semibold mb-4 text-white text-center">{category}</h3>
      <div className="grid grid-cols-2 gap-4">
        {/* Mapea sobre el array de iconos para renderizar un TechIcon por cada uno */}
        {icons.map((icon, index) => (
          <TechIcon key={index} src={icon.src} alt={icon.alt} name={icon.name} />
        ))}
      </div>
    </div>
  );
}

export default TechnologyCard;