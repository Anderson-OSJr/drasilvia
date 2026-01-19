"use client";

import React, { useState } from "react";
import carouselImages from "../../myJasons/images";
import Image from "next/image";

// Ícones de seta simples (você pode usar uma biblioteca como react-icons se preferir)
const ArrowLeft = () => (
  <svg
    xmlns="www.w3.org"
    className="h-4 w-4 text-[#e7e1cc] hover:cursor-pointer"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg
    xmlns="www.w3.org"
    className="h-4 w-4 text-[#e7e1cc] hover:cursor-pointer"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

interface CarouselProps {
  images: ImageData[];
}

const MidleCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-sm md:w-md h-auto max-w-dvw shadow-2xs">
      {/* Container das Imagens */}
      <div className="relative h-96 border-2 border-[#B3B18B] rounded-2xl">
        {carouselImages.map((image, index) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`object-cover absolute top-0 p-2 border-0 rounded-2xl left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Botões de Navegação (Setas) */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#6d6c55] hover:bg-[#979675] bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300 z-10"
        aria-label="Imagem anterior"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#6d6c55] hover:bg-[#979675] bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300 z-10"
        aria-label="Próxima imagem"
      >
        <ArrowRight />
      </button>

      {/* Indicadores (Linhas horizontais) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-10">
        {carouselImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            // Indicador como linha horizontal
            className={`h-1 w-8 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-gray-500 bg-opacity-70"
            }`}
            aria-label={`Ir para a imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MidleCarousel;
