import { CalendarClock } from "lucide-react";
import { FaMapLocationDot } from "react-icons/fa6";
import GoogleMap from "./GoogleMap";
import Instagram from "./Instagram";
import Whatsapp from "./Whatsapp";

const Contatos = () => {
  return (
    <>
      <section
        className="mx-auto max-w-5xl mt-8 bg-[#B1D0C8] shadow-2xl"
        id="contatos"
      >
        <div className="flex flex-col items-center container md:flex-row md:justify-between p-6 gap-10">
          <div className="flex flex-col">
            <p className="text-3xl font-bold text-[#696252] font-sans mb-2">
              Entre em contato
            </p>
            <Whatsapp />
            <Instagram />
            <div className="flex flex-row gap-4 items-center mb-3">
              <div>
                <FaMapLocationDot className="text-2xl text-[#696252]" />
              </div>
              <div className="flex flex-col text-[#575145]">
                <p className="font-bold">Humaniza Espaço Terapêutico</p>
                <p>Av. Armando Corrêa de Siqueira, 1104</p>
                <p>Vila Harmonia, Araraquara - SP</p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <CalendarClock className="text-2xl text-[#696252]" />
              </div>
              <p className="text-[#575145]">
                Atendimento de segunda a sexta, das 8h às 20h
              </p>
            </div>
          </div>
          <div className="h-62 mb-4 p-3 bg-[#C5A059] rounded-2xl">
            <GoogleMap />
          </div>
        </div>
      </section>
    </>
  );
};
export default Contatos;
