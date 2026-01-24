import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo_dra_silvia_1.png"
        alt="Logo da Dra. Sílvia"
        width={60}
        height={90}
        className="#"
      />
    </div>
  );
};
export default Logo;
