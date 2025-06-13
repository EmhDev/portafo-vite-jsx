import React, { useState, useEffect } from 'react';

function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0); // Estado para controlar la diapositiva actual

  const totalSlides = slides.length;

  const moveSlide = (direction) => {
    let newSlide = currentSlide + direction;
    if (newSlide >= totalSlides) {
      newSlide = 0; // Vuelve al principio si llega al final
    } else if (newSlide < 0) {
      newSlide = totalSlides - 1; // Va al final si retrocede desde el principio
    }
    setCurrentSlide(newSlide);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Puedes añadir un efecto para el auto-avance si lo deseas (descomenta el código de abajo)
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000); // Cambia de diapositiva cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, [currentSlide]); // El efecto se re-ejecuta si currentSlide cambia
  */

  return (
    <section id="carousel-section" className="py-16 px-8 bg-soft-pink text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white section-title">Visión</h2>
        <div className="carousel-container bg-white p-4">
          <div
            className="carousel-slides"
            style={{ transform: `translateX(${-currentSlide * 100}%)` }} // Mueve las diapositivas
          >
            {/* Mapea sobre los datos de las diapositivas para renderizarlas dinámicamente */}
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                <a href={slide.link} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={slide.imgSrc}
                    alt={slide.altText}
                    className="w-full h-auto mb-2 rounded-lg object-cover"
                  />
                </a>
                <h3 className="text-xl font-semibold text-fluorescent-pink mb-2">{slide.title}</h3>
                <p className="text-gray-700">{slide.description}</p>
              </div>
            ))}
          </div>
          <button className="carousel-button prev" onClick={() => moveSlide(-1)}>
            &#10094;
          </button>
          <button className="carousel-button next" onClick={() => moveSlide(1)}>
            &#10095;
          </button>
        </div>
        <div className="carousel-dots">
          {/* Mapea para crear los puntos de navegación del carrusel */}
          {slides.map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;