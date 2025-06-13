import React from 'react';

function TechIcon({ src, alt, name }) { // Recibe la URL de la imagen, texto alternativo y nombre
  return (
    <div className="flex flex-col items-center">
      <img src={src} alt={alt} className="w-24 h-24 mb-2 rounded-lg object-contain" />
      <span className="text-sm font-medium text-white">{name}</span>
    </div>
  );
}

export default TechIcon;