const TopMenuBar = () => {
  return (
    <>
      <div className="flex flex-col gap-0.5 md:flex-row md:gap-2">
        <div className="border-2 border-white rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Início
        </div>
        <div className="border-2 border-white rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Doutora
        </div>
        <div className="border-2 border-white rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Serviços
        </div>
        <div className="border-2 border-white rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Consulta
        </div>
        <div className="border-2 border-white rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Acompanhamento
        </div>
        <div className="border-2 border-white rounded-md bg-[#F6F1E3] md:py-1 px-2 text-[#074501] font-medium hover:text-[#95936e] hover:bg-[#e9e4d7] hover:cursor-pointer">
          Localização
        </div>
      </div>
    </>
  );
};
export default TopMenuBar;
