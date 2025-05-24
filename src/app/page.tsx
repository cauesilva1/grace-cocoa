"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Header from "../components/Header";
import palha from "../../public/images/palha3.svg";
import about from "../../public/images/about2.svg";
import iconeAbout from "../../public/images/logo-about.svg";
import maovermelha from "../../public/images/maovermelha.svg";
import menu1 from "../../public/images/menu.svg";
import menu2 from "../../public/images/menu2.svg";
import menu3 from "../../public/images/menu3.svg";
import social from "../../public/images/social.svg";
import social2 from "../../public/images/social2.svg";
import social3 from "../../public/images/social3.svg";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/imagecarrosel";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Definindo as imagens com suas propriedades
  const slides = [
    { src: social, alt: "Social Media 1" },
    { src: social2, alt: "Social Media 2" },
    { src: social3, alt: "Social Media 3" },
  ];

  // Efeito para trocar as imagens automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev ? 2 : 0));
    }, 3000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    console.log(slides.length, "anterior");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    console.log(slides.length, "proximo");
    setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Header />
      <main className="max-w-[80%] pb-28 flex flex-col">
        <section className="w-full h-[1050px] mt-24 flex flex-col justify-between">
          <div className="w-full text-right relative bg-amber-400 z-20000">
            <h1
              className="text-4xl lg:text-[25rem] text-center text-[#8E2A1B] tracking-[2.8rem] leading-none"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
            >
              PALHA
            </h1>

            <h3
              className=" px-10 absolute right-[-.5%] bottom-[16%] bg-[#FFF2D8] lg:text-[5.7rem] text-[#8E2A1B] leading-none  rounded-sm"
              style={{ fontFamily: "var(--font-cinzel) ", fontWeight: 400 }}
            >
              italiana
            </h3>
          </div>
          <Image
            src={palha}
            width={0}
            height={12}
            alt="Palha Italiana"
            className="z-10 -mt-[15rem] w-full"
          />
        </section>

        <section
          id="about"
          className="w-full flex justify-between gap-10 text-[#8E2A1B] mt-24"
        >
          <Image src={about} width={550} height={8} alt="Foto palha italiana" />

          <div className="max-w-[841px] flex flex-col text-justify justify-center gap-10">
            <div className="flex justify-center gap-4">
              <h3
                className="text-[#8E2A1B] text-[70px]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
              >
                ABOUT US
              </h3>
              <Image
                src={iconeAbout}
                width={90}
                height={4}
                alt="Icone mascote"
              />
            </div>

            <div className="flex flex-col gap-8 ">
              <p className="font-medium text-[25px]">
                Were passionate about turning simple moments into something
                unforgettable — and we do it with Palha Italiana!
              </p>
              <p className="font-medium text-[25px]">
                Handmade with love, our{" "}
                <strong className="font-bold">Brazilian</strong> sweets mix
                tradition, creativity, and top-quality ingredients to deliver
                that perfect bite of happiness.
              </p>
              <p className="font-medium text-[25px]">
                Whether its a treat for yourself or a gift for someone special,
                were here to make life a little sweeter, one piece at a time.
              </p>
            </div>
          </div>
        </section>

        <section
          id="menu"
          className="w-full flex flex-col items-center justify-between gap-10 text-[#8E2A1B] mt-24"
        >
          <div className="w-full flex items-center justify-between">
            <div className="flex gap-2">
              <h3 className="font-medium text-[40px] border-b-4 border-b-[#8E2A1B]">
                Menu
              </h3>
              <Image
                src={maovermelha}
                width={70}
                height={6}
                alt="Palha Italiana"
              />
            </div>

            <button
              className="w-[8rem] h-[3rem] bg-[#521B11] text-white px-4 py-2 text-sm uppercase tracking-wide cursor-pointer rounded-sm"
              style={{ fontFamily: "Bemirs, sans-serif" }}
            >
              Buy Now
            </button>
          </div>

          <div className="w-full flex flex-col gap-10 transition-all ease-in">
            <div className="flex gap-4">
              <Image
                src={menu1}
                width={550}
                height={8}
                alt="Palha Italiana"
                className="transition-transform duration-200 hover:scale-110 rounded-sm"
              />
              <Image
                src={menu2}
                width={550}
                height={8}
                alt="Palha Italiana"
                className="transition-transform duration-200 hover:scale-110 rounded-sm"
              />
              <Image
                src={menu3}
                width={550}
                height={8}
                alt="Palha Italiana"
                className="transition-transform duration-200 hover:scale-110 rounded-sm"
              />
            </div>
            <p className="text-[0.98rem]">
              The combination of Brigadeiro (the real Brazilian cholocate fudge)
              combined with tea biscuits that gives the crispy sensation,
              covered by icing sugar, a holy bite!
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col lg:flex-row bg-[#FFF2D8] mt-14">
          {/* Coluna Esquerda */}
          <div className="flex flex-col justify-between items-center px-8 bg-[#8E2A1B]">
            <span className="text-[#FFF2D8] font-bold text-[13rem] leading-none tracking-wider">
              SOC
            </span>
            <div className="w-full flex items-center justify-center ">
              <span className="text-[#FFF2D8] font-bold text-[13rem] leading-none tracking-wider">
                IAL
              </span>
              <span
                className="text-[#FFF2D8] font-bold text-[3.1rem] tracking-widest"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                MEDIA
              </span>
            </div>

            <button
              className="px-4 py-2 mb-8 flex items-center gap-2 text-[#8E2A1B] font-medium text-[2.5rem] tracking-widest bg-[#FFF2D8] 
            rounded-sm cursor-pointer border border-[#8E2A1B] hover:bg-[#8E2A1B] hover:text-[#FFF2D8] hover:border hover:border-[#FFF2D8] transition-all ease-in"
            >
              FOLLOW US
            </button>
          </div>

          {/* Coluna Direita */}
          <div className="hidden lg:flex flex-1 items-center justify-end relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out w-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 transition-transform duration-500"
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={500}
                    height={300}
                    className="w-full h-auto object-contain"
                    priority={index === 0}
                    onError={(e) => {
                      console.error(`Erro ao carregar imagem ${index + 1}:`, e);
                    }}
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handlePrevSlide}
              className="absolute left-0 bg-[#8E2A1B] text-[#FFF2D8] p-2 rounded-full hover:bg-[#521B11] transition-colors z-10"
            >
              ←
            </button>

            <button
              onClick={handleNextSlide}
              className="absolute right-0 bg-[#8E2A1B] text-[#FFF2D8] p-2 rounded-full hover:bg-[#521B11] transition-colors z-10"
            >
              →
            </button>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
