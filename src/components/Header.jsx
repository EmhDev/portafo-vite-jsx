import React from 'react';

function Header() {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-soft-pink to-light-pink p-8">
      <div className="max-w-4xl mx-auto z-10">
        <div className="mb-8">
          <img
            src="portafo-vite-jsx\src\resource\cleanmind_logo_v1.png"
            alt="Tu Foto Profesional"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-lg hover-glow"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
          Bienvenidos a <span className="text-fluorescent-pink">Clean Mind</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 font-light">
          explora tu mente | se EntusIAsta
        </p>
        <a
          href="#about"
          className="inline-block bg-white text-fluorescent-pink font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out hover-glow"
        >
          Conoce Más
        </a>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-fluorescent-pink opacity-5 rounded-full mix-blend-multiply animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white opacity-15 rounded-full mix-blend-multiply animate-pulse animation-delay-4000"></div>
      </div>
    </header>
  );
}

export default Header;