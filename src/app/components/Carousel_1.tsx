"use client";

import { useState } from "react";
import carouselImages from "../myJasons/images";
import Image from "next/image";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Carousel_1 = () => {
  const [imageNumber, setImageNumber] = useState(0);

  const nextImage = () => {
    const imageIndex = imageNumber;
    if (imageIndex === carouselImages.length - 1) {
      setImageNumber(0);
    } else {
      setImageNumber(imageIndex + 1);
    }
  };

  const previousImage = () => {
    const imageIndex = imageNumber;
    if (imageIndex === 0) {
      setImageNumber(carouselImages.length - 1);
    } else {
      setImageNumber(imageIndex - 1);
    }
  };

  return (
    <section className="flex gap-2 justify-between container mx-auto items-center bg-[#dabe8c] mt-6 max-w-5xl px-2 py-4">
      <button
        className="text-[#8e9266] hover:text-[#a6aa7d] hover:cursor-pointer"
        onClick={previousImage}
      >
        <FaArrowAltCircleLeft size={34} />
      </button>
      <div className="h-[350px] flex items-center overflow-hidden">
        {carouselImages.map((image) => (
          <div key={image.id}>
            {image.id === imageNumber && (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="rounded-xl shadow-lg"
              />
            )}
          </div>
        ))}
      </div>

      <button
        onClick={nextImage}
        className="text-[#8e9266] hover:text-[#a6aa7d] hover:cursor-pointer"
      >
        <FaArrowAltCircleRight size={34} />
      </button>
    </section>
  );
};
export default Carousel_1;
