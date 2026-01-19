import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const Whatsapp = () => {
  return (
    <Link href="https://wa.me/5516999611968?text=Olá,%20quero%20marcar%20uma%20consulta.">
      <div className="flex flex-row gap-4 items-center mb-3">
        <div>
          <BsWhatsapp className="text-2xl text-[#696252]" />
        </div>
        <p className="text-xl text-[#575145]">(16) 99961-1968</p>
      </div>
    </Link>
  );
};
export default Whatsapp;
