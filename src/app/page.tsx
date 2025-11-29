import Image from "next/image";
import MainCard from "./components/MainCard";
import MidleCarousel from "./components/MidleCarousel";
import TopMenuBar from "./components/TopMenuBar";
import Logo from "./components/Logo";
import ImageDraSilvia from "./components/ImageDraSilvia";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-[#f7f5e5]">
        {/* Top Menu */}
        <div className="w-full max-w-3xl flex flex-row justify-around items-center bg-[#f5f1e3] p-2">
          <Logo />
          <TopMenuBar />
        </div>

        {/* Doutora */}
        <div className="max-w-3xl container flex flex-col md:flex-row md:justify-evenly md:columns-3 md:gap-8 items-center-safe bg-[#B8B68F]">
          <div className="md:pr-4">
            <ImageDraSilvia />
          </div>
          <div className="md:pl-4 mt-3">
            <MainCard />
          </div>
        </div>

        <div className="max-w-3xl container flex flex-col md:flex-row-reverse md:justify-evenly md:gap-3 items-center-safe bg-[#DBD3C6] pr-3">
          <div className="container max-w-md flex flex-col items-center bg-[#D0C0A7] border rounded-lg">
            <div className="mt-3 flex flex-col">
              <p className="text-md md:text-lg px-2 mb-2">
                Sou a Dra. Sílvia Barreto, médica com especialização em
                Pediatria e em Acupuntura.
              </p>
              <p className="text-md md:text-lg px-2 mb-2">
                Quero lhe apresentar a Medicina Tradicional Chinesa, com o
                objetivo de mostrar o alcance dessa abordagem médica e como ela
                pode transformar a sua saúde e a qualidade de vida.
              </p>
            </div>
          </div>
          <MidleCarousel />
        </div>
        <div className="h-48 container max-w-3xl flex flex-col items-center bg-[#DECCA6]"></div>
        <div className="h-48 container max-w-3xl flex flex-col items-center bg-[#B8B68F]"></div>
        <div className="h-48 container max-w-3xl flex flex-col items-center bg-[#DBD3C6]"></div>
        <div className="h-36 container max-w-3xl flex flex-col items-center bg-[#EBE6D2]"></div>
      </div>
    </>
  );
}
