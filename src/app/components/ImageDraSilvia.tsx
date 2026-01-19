import Image from "next/image";
const ImageDraSilvia = () => {
  return (
    <section id="inicio" className="flex container justify-center mx-auto pt-6">
      <Image
        src="/dra_silvia.jpg"
        alt="Fotografia da Dra. Sílvia"
        width={300}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </section>
  );
};
export default ImageDraSilvia;
