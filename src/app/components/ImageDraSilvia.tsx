import Image from "next/image";
const ImageDraSilvia = () => {
  return (
    <Image
      src="/dra_silvia.jpg"
      alt="Fotografia da Dra. Sílvia"
      width={350}
      height={300}
      className="border-1 border-amber-100 shadow-xl rounded-lg drop-shadow-blue-950 shadow-3xl w-sm my-6"
    />
  );
};
export default ImageDraSilvia;
