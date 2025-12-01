import { Button } from "@/components/ui/button";

const TopMenuBar = () => {
  return (
    <>
      <div className="flex flex-col gap-0.5 md:flex-row md:gap-2">
        <Button className="border-2 border-[#B7B68F] rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Início
        </Button>
        <Button className="border-2 border-[#B7B68F] rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Doutora
        </Button>
        <Button className="border-2 border-[#B7B68F] rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Serviços
        </Button>
        <Button className="border-2 border-[#B7B68F] rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Consulta
        </Button>
        <Button className="border-2 border-[#B7B68F] rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Acompanhamento
        </Button>
        <Button className="border-2 border-[#B7B68F] rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Localização
        </Button>
      </div>
    </>
  );
};
export default TopMenuBar;
