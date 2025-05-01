import Image from "next/image";
import React from "react";
import logo from "../../public/graceecocoa.png";

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-10000 bg-[#FFF2D8] flex items-center justify-between px-8 py-4 rounded-b-sm shadow-sm">
    <Image src={logo} alt="Grace & Cocoa" width={165} height={0} />
    {/* <nav className="hidden md:flex gap-[312px] uppercase text-sm tracking-widest">
    </nav> */}
      <a className="text-[#8E2A1B] font-bold text-[1.8rem]" href="#about">
        About Us
      </a>
      <a className="text-[#8E2A1B] font-bold text-[1.8rem]" href="#menu">
        Menu
      </a>

    <button
      className="px-4 py-2 bg-[#521B11] text-white font-bold text-[1.5rem] border border-[#FFF2D8] uppercase tracking-widest cursor-pointer rounded-sm
      hover:border hover:border-[#521B11] hover:text-[#521B11] hover:bg-[#FFF2D8] transition-colors duration-300 ease-in"
      style={{ fontFamily: "Gilroy, sans-serif" }} >
      Buy Now
    </button>

  </header>
);

export default Header;
