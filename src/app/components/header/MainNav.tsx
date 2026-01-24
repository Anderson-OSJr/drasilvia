"use client";

import Logo from "./Logo";
import { IoMenu } from "react-icons/io5";
import TopMenu from "./TopMenu";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const MainNav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const setMenu = () => {
    setIsMenuActive((previous) => !previous);
  };

  return (
    <section className="h-32 flex items-center max-w-5xl justify-between bg-[#f3eee2] fixed top-0 right-0 left-0  mx-auto z-50 shadow-md">
      <div className="flex container gap-2 items-center">
        <div className="w-fit p-6 lg:p-10">
          <Logo />
        </div>
        <div className="text-[#3a4928] text-2xl font-medium">
          Dra. Sílvia Barreto
        </div>
      </div>
      <button
        className="w-fit p-6 text-[#3a4928] md:hidden hover:cursor-pointer"
        onClick={setMenu}
      >
        <IoMenu size={40} />
      </button>
      <div className="hidden md:flex">
        <TopMenu />
      </div>
      <div className="absolute top-50 right-2">
        {/* Mobile Menu */}
        {isMenuActive && (
          <div className="md:hidden">
            <MobileMenu />
          </div>
        )}
      </div>
    </section>
  );
};
export default MainNav;
