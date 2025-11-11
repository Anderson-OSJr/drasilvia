import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen flex flex-col md:flex-row py-10 items-center md:justify-center content-center">
        <div className="flex flex-row justify-items-center px-10">
          <div className="content-center">
            <Image
              src="/icone.jpg"
              alt="Fotografia da Dra. Sílvia"
              width={140}
              height={50}
              className="px-3 h-28"
            />
          </div>

          <div className="justify-items-center content-center px-3">
            <div className="text-2xl md:text-4xl">Dra. Sílvia Barreto</div>
            <div className="text-2xl md:text-3xl">Acupunturiatra</div>
          </div>
        </div>

        <Image
          src="/dra_silvia.jpg"
          alt="Fotografia da Dra. Sílvia"
          width={400}
          height={300}
          className="px-10"
        />

        <div className="w-sm  text-lg content-center ">
          <p>
            Sou a Dra. Sílvia Barreto, médica com especialização em Pediatria e
            em Acupuntura.
          </p>
          <p>
            Quero lhe apresentar a Medicina Tradicional Chinesa, com o objetivo
            de mostrar o alcance dessa abordagem médica e como ela pode
            transformar a sua saúde e a qualidade de vida.
          </p>
        </div>
      </div>
    </>
  );
}
