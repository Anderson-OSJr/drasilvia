import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";

const Instagram = () => {
  return (
    <Link href="https://www.instagram.com/drasilviabarreto.mtc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
      <div className="flex flex-row gap-4 items-center mb-3">
        <div>
          <FaInstagramSquare className="text-2xl text-[#696252]" />
        </div>
        <p className="text-xl text-[#575145]">drasilviabarreto.mtc</p>
      </div>
    </Link>
  );
};
export default Instagram;
