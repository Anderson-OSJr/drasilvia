import Image from "next/image";

const ImagemSala = () => {
  return (
    <div>
      <Image
        src="/sala_atendimento.jpg"
        alt="Fotografia da Dra. Sílvia"
        width={300}
        height={300}
        className="rounded-lg shadow-lg shadow-emerald-900/40"
      />
    </div>
  );
};
export default ImagemSala;
