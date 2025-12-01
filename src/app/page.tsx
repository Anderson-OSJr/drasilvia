import MidleCarousel from "./components/MidleCarousel";
import TopMenuBar from "./components/TopMenuBar";
import Logo from "./components/Logo";
import ImageDraSilvia from "./components/ImageDraSilvia";
import MainText from "./components/MainText";
import Contatos from "./components/Contatos";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-[#f7f5e5] pt-2">
        {/* Top Menu */}
        <div className="w-full max-w-3xl flex flex-row justify-around items-center bg-[#f5f1e3] p-2 shadow-xl">
          <Logo />
          <TopMenuBar />
        </div>

        {/* Doutora */}
        <div className="flex flex-col columns-2 items-center md:flex-row md:justify-around max-w-3xl bg-[#B8B68F]">
          <div className="p-3">
            <ImageDraSilvia />
          </div>
          <div className="#">
            <MainText />
          </div>
        </div>

        {/* Carousel */}
        <div className="flex flex-row justify-center w-3xl md:max-w-3xl bg-[#DBD3C6] py-6">
          <MidleCarousel images={[]} />
        </div>

        <div className="h-48 container max-w-3xl flex flex-col items-center bg-[#DECCA6]"></div>
        <div className="h-48 container max-w-3xl flex flex-col items-center bg-[#B8B68F]"></div>
        <div className="h-80 container max-w-3xl flex flex-col items-center bg-[#DBD3C6]">
          <Contatos />
        </div>
        <div className="h-36 container max-w-3xl flex flex-col items-center bg-[#EBE6D2]"></div>
      </div>
    </>
  );
}
