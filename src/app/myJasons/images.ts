export interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const carouselImages: CarouselImage[] = [
  {
    id: 0,
    src: "/laserAcupuntura.png",
    alt: "Consulta médica com acupuntura",
    width: 350,
    height: 300,
  },
  {
    id: 1,
    src: "/draSilvia3.jpg",
    alt: "Consulta médica com acupuntura",
    width: 350,
    height: 300,
  },
  {
    id: 2,
    src: "/draSilvia2.jpg",
    alt: "Consulta médica com acupuntura",
    width: 350,
    height: 300,
  },
  {
    id: 3,
    src: "/folder1.jpg",
    alt: "Consulta médica com acupuntura",
    width: 350,
    height: 300,
  },
  {
    id: 4,
    src: "/sala_atendimento.jpeg",
    alt: "sala de atendimento",
    width: 350,
    height: 300,
  },
];

export default carouselImages;
