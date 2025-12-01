export interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: "/draSilvia5.jpg",
    alt: "Consulta médica com acupuntura",
    width: 250,
    height: 200,
  },
  {
    id: 2,
    src: "/draSilva4.jpg",
    alt: "Consulta médica com acupuntura",
    width: 350,
    height: 300,
  },
  {
    id: 3,
    src: "/draSilvia3.jpg",
    alt: "Consulta médica com acupuntura",
    width: 350,
    height: 300,
  },
  {
    id: 4,
    src: "/draSilvia2.jpg",
    alt: "Consulta médica com acupuntura",
    width: 350,
    height: 300,
  },
  {
    id: 5,
    src: "/folder1.jpg",
    alt: "Consulta médica com acupuntura",
    width: 350,
    height: 300,
  },
];

export default carouselImages;
