"use client";
import Header from "@/components/Header";
import Image from "next/image";
import palha from "../../public/images/palha2.svg";
import iconeAbout from "../../public/images/logo-about.svg";
import maovermelha from "../../public/images/maovermelha.svg";
import about from "../../public/images/about2.svg";
import menu1 from "../../public/images/menu.svg";
import menu2 from "../../public/images/menu2.svg";
import menu3 from "../../public/images/menu3.svg";
import social from "../../public/images/social.svg";
import social2 from "../../public/images/social2.svg";
import social3 from "../../public/images/social3.svg";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import CarouselDesktop from "@/components/CarouselDesktop";

export default function MobilePage() {
  return (
    <>
      <main className="max-w-[90%] lg:max-w-[80%] mb-6 lg:pb-28 flex flex-col">
        <section className="w-full lg:h-full mt-36 lg:mt-[10vw] flex flex-col items-center ">
          <div className="w-full relative">
            <h1
              className="text-[26vw] md:text-[25vw] lg:text-[18.45vw] text-center text-[#8E2A1B] lg:tracking-[2.8rem] leading-none"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
            >
              PALHA
            </h1>

            <h3
              className="absolute right-[1%] md:right-[1.3%] lg:right-[.3%] bottom-[16%] md:bottom-[15%] bg-[#FFF2D8] font-semibold text-center text-[6vw] 
              md:text-[3rem] lg:text-[4vw] text-[#8E2A1B] leading-none md:px-3 lg:px-[3rem] max-w-[34%] w-[34%] lg:max-w-[40%] lg:w-[34%]"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 400 }}
            >
              italiana
            </h3>
          </div>
          <Image
            src={palha}
            width={0}
            height={12}
            alt="Palha Italiana"
            className="w-full -mt-[6vw] z-50 md:-mt-[6vh] lg:-mt-[5vw]"
          />
        </section>

        <section
          id="about"
          className="w-full flex flex-col lg:flex-row justify-between gap-10 text-[#8E2A1B] mt-24 px-4 lg:px-0"
        >
          <div className="w-full flex flex-col md:flex-col lg:flex-row text-justify justify-center gap-6 lg:gap-10">
            <div className="flex justify-center lg:justify-start items-center gap-4 lg:hidden">
              <h3
                className="text-[#8E2A1B] text-[40px] font-bold lg:text-[70px]"
                style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
              >
                ABOUT US
              </h3>

              <Image
                src={iconeAbout}
                width={90}
                height={4}
                alt="Icone mascote"
                className="w-[60px] lg:w-[90px] h-auto"
              />
            </div>

            <Image
              src={about}
              width={550}
              height={8}
              alt="Foto palha italiana"
              className="w-full lg:w-[550px] h-auto object-cover"
            />

            <div className="flex flex-col  gap-6 lg:gap-8 lg:w-full">
              <div className="lg:flex justify-center lg:justify-start items-center gap-4 hidden">
                <h3
                  className="text-[#8E2A1B] font-bold lg:text-[4vw]"
                  style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
                >
                  ABOUT US
                </h3>

                <Image
                  src={iconeAbout}
                  width={90}
                  height={4}
                  alt="Icone mascote"
                  className="w-[60px] lg:w-[90px] h-auto"
                />
              </div>

              <p className="font-medium text-[18px] lg:text-[2rem]">
                Were passionate about turning simple moments into something
                unforgettable — and we do it with Palha Italiana!
              </p>
              <p className="font-medium text-[18px] lg:text-[2rem]">
                Handmade with love, our{" "}
                <strong className="font-bold">Brazilian</strong> sweets mix
                tradition, creativity, and top-quality ingredients to deliver
                that perfect bite of happiness.
              </p>
              <p className="font-medium text-[18px] lg:text-[2rem]">
                Whether its a treat for yourself or a gift for someone special,
                were here to make life a little sweeter, one piece at a time.
              </p>
            </div>
          </div>
        </section>

        <section
          id="menu"
          className="w-full flex flex-col items-center justify-between gap-10 text-[#8E2A1B] mt-24 px-4 lg:px-0"
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
            <div className="flex gap-2 items-center">
              <h3 className="font-medium text-[30px] lg:text-[40px] border-b-4 border-b-[#8E2A1B]">
                Menu
              </h3>
              <Image
                src={maovermelha}
                width={70}
                height={6}
                alt="Palha Italiana"
                className="w-[50px] lg:w-[70px] h-auto"
              />
            </div>

            <button
              className="hidden lg:block lg:w-[8rem] lg:h-[3rem] bg-[#8E2A1B] text-white text-2xl font-bold uppercase tracking-wide cursor-pointer 
              rounded-sm"
              style={{ fontFamily: "Bemirs, sans-serif" }}
            >
              Buy Now
            </button>
          </div>

          <div className="w-full flex flex-col gap-10 transition-all ease-in lg:px-12">
            <Carousel 
              images={[menu1, menu2, menu3]}
              alt="Palha Italiana"
            />
            <p className="text-[0.98rem] lg:text-[2rem] text-center lg:text-left text-justify">
              The combination of Brigadeiro (the real Brazilian cholocate fudge)
              combined with tea biscuits that gives the crispy sensation,
              covered by icing sugar, a holy bite!
            </p>

            <button
              className="lg:hidden w-[45%] max-w-[55%] mx-auto lg:w-[8rem] lg:h-[3rem] bg-[#8E2A1B] text-white py-2 text-2xl font-bold uppercase tracking-wide cursor-pointer 
              rounded-sm"
              style={{ fontFamily: "Bemirs, sans-serif" }}
            >
              Buy Now
            </button>
          </div>
        </section>

        {/* carrosel social media mobile */}
        <section className="w-full mt-24 flex flex-col gap-8 lg:hidden">
          <div className="relative">
            <span
              className="w-full py-7 block bg-[#8E2A1B] text-center text-5xl text-[#FFF2D8]
             uppercase"
            >
              social media
            </span>

            <Carousel 
              images={[social, social2, social3]}
              alt="Palha Italiana"
            />

          </div>
            <a
              className="w-[55%] mx-auto lg:w-[8rem] lg:h-[3rem] bg-[#8E2A1B] text-white text-center py-2 px-4 text-2xl font-bold uppercase tracking-widest cursor-pointer 
              rounded-sm"
              style={{ fontFamily: "Bemirs, sans-serif" }}
              href="https://www.instagram.com/grace.cocoa/"
              target="_blank"
            >
              follow us
            </a>
        </section>

        {/* carrosel social media desktop */}
        <section className="w-full lg:flex flex-col lg:flex-row bg-[#FFF2D8] mt-14 hidden">
          {/* Coluna Esquerda */}
          <div className="flex flex-col justify-center gap-2 items-center px-8 bg-[#8E2A1B]">
            <span className="text-[#FFF2D8] font-bold text-[8vw] leading-none tracking-wider">
              SOC
            </span>
            <div className="w-full flex items-center justify-center ">
              <span className="text-[#FFF2D8] font-bold text-[8vw] leading-none tracking-wider">
                IAL
              </span>
              <span
                className="text-[#FFF2D8] font-bold text-[2vw] tracking-widest"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                MEDIA
              </span>
            </div>

            <a
              className="px-4 py-2 flex items-center gap-2 text-[#8E2A1B] font-medium text-[2vw] tracking-widest bg-[#FFF2D8] 
            rounded-sm cursor-pointer border border-[#8E2A1B] hover:bg-[#8E2A1B] hover:text-[#FFF2D8] hover:border hover:border-[#FFF2D8] transition-all ease-in"
              href="https://www.instagram.com/grace.cocoa/"
              target="_blank"
            >
              FOLLOW US
            </a>
          </div>

          {/* Coluna Direita */}
          <div className="hidden lg:flex flex-1 items-center justify-end relative overflow-hidden">
            <CarouselDesktop 
              images={[social, social2, social3]}
              alt="Palha Italiana"
            />
          </div>
        </section>
      </main>
    </>
  );
}
