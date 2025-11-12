import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen flex flex-col items-center bg-yellow-50">
        <div className="h-4 container max-w-3xl flex flex-col items-center bg-emerald-600"></div>
        <div className="max-w-3xl container flex flex-col md:flex-row md:justify-evenly md:columns-3 md:gap-8 items-center-safe bg-emerald-50">
          <div>
            <div className="container w-sm flex justify-between md:justify-evenly px-2 pt-4 pb-2">
              <Image
                src="/icone.jpg"
                alt="Fotografia da Dra. Sílvia"
                width={100}
                height={50}
                className="h-16 w-16 border-0 rounded-full drop-shadow-blue-950 shadow-2xl"
              />
              <div className="flex flex-col">
                <div className="text-2xl">Dra. Sílvia Barreto</div>
                <div className="text-{32px}">Acupunturiatra</div>
              </div>
            </div>
          </div>
          <div className="md:pr-4">
            <Image
              src="/dra_silvia.jpg"
              alt="Fotografia da Dra. Sílvia"
              width={350}
              height={300}
              className="border-0 rounded-lg drop-shadow-blue-950 shadow-2xl w-sm my-6"
            />
          </div>
        </div>

        <div className="container max-w-3xl flex flex-col items-center bg-emerald-100">
          <div className="mt-6 flex flex-col px-8">
            <p className="text-lg md:text-xl px-2 mb-2">
              Sou a Dra. Sílvia Barreto, médica com especialização em Pediatria
              e em Acupuntura.
            </p>
            <p className="text-lg md:text-xl px-2 mb-2">
              Quero lhe apresentar a Medicina Tradicional Chinesa, com o
              objetivo de mostrar o alcance dessa abordagem médica e como ela
              pode transformar a sua saúde e a qualidade de vida.
            </p>
          </div>
        </div>
        <div className="h-48 container max-w-3xl flex flex-col items-center bg-emerald-50"></div>
        <div className="h-36 container max-w-3xl flex flex-col items-center bg-emerald-950"></div>
      </div>
    </>
  );
}
