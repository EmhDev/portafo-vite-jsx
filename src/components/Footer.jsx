import React from 'react';

function Footer() {
  return (
    <footer className="bg-soft-pink py-8 px-8 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4">&copy; 2025 Tu Nombre. Todos los derechos reservados.</p>
        <p>
          <a href="#" className="text-white hover:text-gray-200 mx-2">LinkedIn</a> |
          <a href="#" className="text-white hover:text-gray-200 mx-2">GitHub</a> |
          <a href="mailto:tu.email@example.com" className="text-white hover:text-gray-200 mx-2">tu.email@example.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;