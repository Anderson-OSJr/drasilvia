import Image from "next/image";
const ImageDraSilvia = () => {
  return (
    <Image
      src="/dra_silvia.jpg"
      alt="Fotografia da Dra. Sílvia"
      width={300}
      height={300}
      className="rounded-lg shadow-lg shadow-emerald-900/40"
    />
  );
};
export default ImageDraSilvia;
