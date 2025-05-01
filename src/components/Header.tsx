import Image from "next/image";
import React from "react";

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-[#FFF2D8] flex items-center justify-between px-6 py-4 rounded-b-sm">
    <div className="flex items-center gap-2">
      <Image src="/graceecocoa.png" alt="Grace & Cocoa" className="h-10" width={100} height={30} />
    </div>
    <nav className="hidden md:flex gap-6 uppercase text-sm tracking-widest">
      <a className="text-[#8E2A1B]" href="#about">About Us</a>
      <a className="text-[#8E2A1B]" href="#menu">Menu</a>
    </nav>
    <button className="bg-[#521B11] text-white px-4 py-2 text-sm uppercase tracking-wide cursor-pointer rounded-sm" style={{ fontFamily: 'Bemirs, sans-serif' }}>
      Buy Now
    </button>
  </header>
);

export default Header;