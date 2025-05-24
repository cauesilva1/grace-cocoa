"use client";
import { useCallback } from "react";

import Header from "@/components/Header";

import Image from "next/image";
import palha from "../../../public/images/palha2.svg";
import iconeAbout from "../../../public/images/logo-about.svg";
import maovermelha from "../../../public/images/maovermelha.svg";
import about from "../../../public/images/about2.svg";
import menu1 from "../../../public/images/menu.svg";
import menu2 from "../../../public/images/menu2.svg";
import menu3 from "../../../public/images/menu3.svg";
import useEmblaCarousel from "embla-carousel-react";
import social from "../../../public/images/social.svg";
import social2 from "../../../public/images/social2.svg";
import social3 from "../../../public/images/social3.svg";
import Footer from "@/components/Footer";

export default function MobilePage() {
  const [menuEmblaRef, menuEmblaApi] = useEmblaCarousel({ loop: true });
  const [socialEmblaRef, socialEmblaApi] = useEmblaCarousel({ loop: true });

  const scrollMenuPrev = useCallback(() => {
    if (menuEmblaApi) menuEmblaApi.scrollPrev();
  }, [menuEmblaApi]);

  const scrollMenuNext = useCallback(() => {
    if (menuEmblaApi) menuEmblaApi.scrollNext();
  }, [menuEmblaApi]);

  const scrollSocialPrev = useCallback(() => {
    if (socialEmblaApi) socialEmblaApi.scrollPrev();
  }, [socialEmblaApi]);

  const scrollSocialNext = useCallback(() => {
    if (socialEmblaApi) socialEmblaApi.scrollNext();
  }, [socialEmblaApi]);

  return (
    <>
      <Header />
      <main className="max-w-[90%] lg:max-w-[80%] mb-6 lg:pb-28 flex flex-col">
        <section className="w-full lg:h-[1050px] mt-36 flex flex-col items-center">
          <div className="w-full relative">
            <h1
              className="text-[7rem] lg:text-[25rem] text-center text-[#8E2A1B] lg:tracking-[2.8rem] leading-none"
              style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
            >
              PALHA
            </h1>

            <h3
              className="px-1.5 lg:px-10 absolute right-0 bottom-[13px] bg-[#FFF2D8] font-semibold text-[1.625rem] 
              lg:text-[5.7rem] text-[#8E2A1B] leading-none"
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
            className="w-full -mt-8 z-50"
          />
        </section>

        <section
          id="about"
          className="w-full flex flex-col lg:flex-row justify-between gap-10 text-[#8E2A1B] mt-24 px-4 lg:px-0"
        >
          <div className="w-full lg:max-w-[841px] flex flex-col text-justify justify-center gap-6 lg:gap-10">
            <div className="flex justify-center lg:justify-start items-center gap-4">
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
            <div className="flex flex-col gap-6 lg:gap-8">
              <p className="font-medium text-[18px] lg:text-[25px]">
                Were passionate about turning simple moments into something
                unforgettable — and we do it with Palha Italiana!
              </p>
              <p className="font-medium text-[18px] lg:text-[25px]">
                Handmade with love, our{" "}
                <strong className="font-bold">Brazilian</strong> sweets mix
                tradition, creativity, and top-quality ingredients to deliver
                that perfect bite of happiness.
              </p>
              <p className="font-medium text-[18px] lg:text-[25px]">
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
          </div>

          <div className="w-full flex flex-col gap-10 transition-all ease-in">
            <div className="relative">
              <div className="overflow-hidden" ref={menuEmblaRef}>
                <div className="flex">
                  <div className="flex-[0_0_100%] min-w-0">
                    <Image
                      src={menu1}
                      width={550}
                      height={8}
                      alt="Palha Italiana"
                      className="w-full h-auto transition-transform duration-200 hover:scale-110 rounded-sm"
                    />
                  </div>
                  <div className="flex-[0_0_100%] min-w-0">
                    <Image
                      src={menu2}
                      width={550}
                      height={8}
                      alt="Palha Italiana"
                      className="w-full h-auto transition-transform duration-200 hover:scale-110 rounded-sm"
                    />
                  </div>
                  <div className="flex-[0_0_100%] min-w-0">
                    <Image
                      src={menu3}
                      width={550}
                      height={8}
                      alt="Palha Italiana"
                      className="w-full h-auto transition-transform duration-200 hover:scale-110 rounded-sm"
                    />
                  </div>
                </div>
              </div>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#521B11] text-white w-10 h-10 rounded-full flex items-center justify-center"
                onClick={scrollMenuPrev}
              >
                ←
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#521B11] text-white w-10 h-10 rounded-full flex items-center justify-center"
                onClick={scrollMenuNext}
              >
                →
              </button>
            </div>
            <p className="text-[0.98rem] lg:text-base text-center lg:text-left text-justify">
              The combination of Brigadeiro (the real Brazilian cholocate fudge)
              combined with tea biscuits that gives the crispy sensation,
              covered by icing sugar, a holy bite!
            </p>

            <button
              className="w-[45%] mx-auto lg:w-[8rem] lg:h-[3rem] bg-[#8E2A1B] text-white py-2 text-2xl font-bold uppercase tracking-wide cursor-pointer 
              rounded-sm"
              style={{ fontFamily: "Bemirs, sans-serif" }}
            >
              Buy Now
            </button>
          </div>
        </section>

        <section className="w-full mt-24 flex flex-col gap-8">
          <div className="relative">
            <span
              className="w-full py-7 block bg-[#8E2A1B] text-center text-5xl text-[#FFF2D8]
             uppercase "
            >
              social media
            </span>
            <div className="overflow-hidden" ref={socialEmblaRef}>
              <div className="flex">
                <div className="flex-[0_0_100%] min-w-0">
                  <Image
                    src={social}
                    width={550}
                    height={8}
                    alt="Palha Italiana"
                    className="w-full h-auto transition-transform duration-200 hover:scale-110 rounded-sm"
                  />
                </div>
                <div className="flex-[0_0_100%] min-w-0">
                  <Image
                    src={social2}
                    width={550}
                    height={8}
                    alt="Palha Italiana"
                    className="w-full h-auto transition-transform duration-200 hover:scale-110 rounded-sm"
                  />
                </div>
                <div className="flex-[0_0_100%] min-w-0">
                  <Image
                    src={social3}
                    width={550}
                    height={8}
                    alt="Palha Italiana"
                    className="w-full h-auto transition-transform duration-200 hover:scale-110 rounded-sm"
                  />
                </div>
              </div>
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#521B11] text-white w-10 h-10 rounded-full flex items-center justify-center"
              onClick={scrollSocialPrev}
            >
              ←
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#521B11] text-white w-10 h-10 rounded-full flex items-center justify-center"
              onClick={scrollSocialNext}
            >
              →
            </button>
          </div>

          <button
            className="w-[45%] mx-auto lg:w-[8rem] lg:h-[3rem] bg-[#8E2A1B] text-white py-2 text-2xl font-bold uppercase tracking-wide cursor-pointer 
              rounded-sm"
            style={{ fontFamily: "Bemirs, sans-serif" }}
          >
            follow us
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
