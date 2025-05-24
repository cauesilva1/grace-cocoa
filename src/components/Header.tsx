import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/graceecocoa.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-10000 bg-[#FFF2D8] flex items-center justify-between px-8 py-4 rounded-b-sm shadow-sm">
      <Image src={logo} alt="Grace & Cocoa" width={165} height={0} />
      
      {/* Menu para desktop */}
      <nav className="hidden md:w-[30%] md:flex md:justify-between  items-center gap-8">
        <a className="text-[#8E2A1B] font-bold text-[1.8rem]" href="#about">
          About Us
        </a>
        <a className="text-[#8E2A1B] font-bold text-[1.8rem]" href="#menu">
          Menu
        </a>
      </nav>

      {/* Botão de compra */}
      <button
        className="hidden md:block px-4 py-2 bg-[#521B11] text-white font-bold text-[1.5rem] border border-[#FFF2D8] uppercase tracking-widest cursor-pointer rounded-sm
        hover:border hover:border-[#521B11] hover:text-[#521B11] hover:bg-[#FFF2D8] transition-colors duration-300 ease-in"
        style={{ fontFamily: "Gilroy, sans-serif" }}
      >
        Buy Now
      </button>

      {/* Botão hambúrguer para mobile */}
      <button
        className="md:hidden flex flex-col gap-2 p-2"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className={`block w-6 h-0.5 bg-[#8E2A1B] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#8E2A1B] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#8E2A1B] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
      </button>

      {/* Menu mobile */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#FFF2D8] p-4 shadow-md md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a 
                className="text-[#8E2A1B] font-bold text-[1.8rem] block" 
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                className="text-[#8E2A1B] font-bold text-[1.8rem] block" 
                href="#menu"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
            </li>
            <li>
              <button
                className="w-full px-4 py-2 bg-[#521B11] text-white font-bold text-[1.5rem] border border-[#FFF2D8] uppercase tracking-widest cursor-pointer rounded-sm
                hover:border hover:border-[#521B11] hover:text-[#521B11] hover:bg-[#FFF2D8] transition-colors duration-300 ease-in"
                style={{ fontFamily: "Gilroy, sans-serif" }}
              >
                Buy Now
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
