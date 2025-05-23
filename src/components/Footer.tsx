import Image from "next/image";
import React from "react";
import footerimage from "../../public/images/footerimage.svg"

const Footer = () => (
  <footer className="w-full bg-[#8E2A1B] text-[#FFF2D8] pt-10 pb-6 px-14 sm:px-24 mt-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
      {/* Logo grande e nome */}
      <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
        <Image
          src={footerimage}
          alt="Grace & Cocoa"
          width={320}
          height={120}
          className="mb-2 w-auto h-auto max-w-[320px]"
          priority
        />
      </div>
      {/* Links e contatos */}
      <div className="flex flex-col gap-3 text-[#FFF2D8] text-base sm:text-lg min-w-[180px] w-full md:w-auto items-center md:items-end">
        <a href="#about" className="hover:underline">About us</a>
        <a href="#menu" className="hover:underline">Menu</a>
        <span className="break-all text-center md:text-right">Contact: <a href="mailto:vrcamposr@gmail.com" className="hover:underline">vrcamposr@gmail.com</a></span>
        <span className="text-center md:text-right">Instagram: <a href="https://instagram.com/grace.cocoa" target="_blank" rel="noopener noreferrer" className="hover:underline">@grace.cocoa</a></span>
      </div>
    </div>
    {/* Linha divisória */}
    <hr className="border-[#FFF2D8] opacity-40 my-8" />
    {/* Copyright */}
    <div className="text-center text-[#FFF2D8] opacity-80 text-xs sm:text-sm tracking-widest">
      © GRACE & COCOA / YANNI MEDIA
    </div>
  </footer>
);

export default Footer;
