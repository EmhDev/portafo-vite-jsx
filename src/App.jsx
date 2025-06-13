import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Carousel from './components/Carousel';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

// Datos para el carrusel
const carouselSlides = [
  {
    imgSrc: "https://placehold.co/600x250/FFD1DC/333333?text=Juegos",
    altText: "Imagen de Juegos",
    title: "Juegos",
    description: "Explorando la lógica y creatividad detrás del desarrollo de videojuegos.",
    link: "#"
  },
  {
    imgSrc: "https://placehold.co/600x250/FFD1DC/333333?text=Desarrollo",
    altText: "Imagen de Desarrollo",
    title: "Desarrollo",
    description: "Construyendo soluciones robustas y escalables para el mundo digital.",
    link: "#"
  },
  {
    imgSrc: "https://placehold.co/600x250/FFD1DC/333333?text=Bienestar+y+Union",
    altText: "Imagen de Bienestar y Unión",
    title: "Clean Mind",
    description: "Fomentando un ambiente de bienestar y colaboración en el trabajo.",
    link: "#"
  },
  {
    imgSrc: "https://placehold.co/600x250/FFD1DC/333333?text=Camino+al+Futuro",
    altText: "Imagen de Innovación",
    title: "Innovación",
    description: "Siempre en busca de nuevas ideas y tecnologías para el futuro.",
    link: "#"
  },
];

// Datos para las tecnologías
const technologiesData = [
  {
    category: "Inteligencia Artificial",
    icons: [
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=BERT", alt: "BERT Logo", name: "BERT" },
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=HuggingFace", alt: "Hugging Face Logo", name: "Hugging Face" },
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=PyTorch", alt: "PyTorch Logo", name: "PyTorch" },
    ]
  },
  {
    category: "Frontend",
    icons: [
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=React", alt: "React Logo", name: "React" },
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=Angular", alt: "Angular Logo", name: "Angular" },
    ]
  },
  {
    category: "Backend",
    icons: [
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=Node.js", alt: "Node.js Logo", name: "Node.js" },
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=Java+17%2B%2B", alt: "Java 17++ Logo", name: "Java 17++" },
    ]
  },
  {
    category: "Bases de Datos",
    icons: [
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=SQL", alt: "SQL Logo", name: "SQL" },
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=NoSQL", alt: "NoSQL Logo", name: "NoSQL" },
    ]
  },
  {
    category: "Servidores",
    icons: [
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=Servidores", alt: "Servidores Logo", name: "Administración de Servidores" },
    ]
  },
  {
    category: "DevOps / Contenedores",
    icons: [
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=Docker", alt: "Docker Logo", name: "Docker" },
      { src: "https://placehold.co/100x100/FFD1DC/333333?text=Kubernetes", alt: "Kubernetes Logo", name: "Kubernetes" },
    ]
  },
];

function App() {
  return (
    <div className="antialiased leading-normal tracking-tight">
      <Header />
      <About />
      {/* Pasamos los datos del carrusel como una prop */}
      <Carousel slides={carouselSlides} />
      {/* Pasamos los datos de las tecnologías como una prop */}
      <Technologies data={technologiesData} />
      <Footer />
    </div>
  );
}

export default App;