import Image from "next/image";
import Header from "../components/Header";
import palha from "../../public/images/palha3.svg";
import about from "../../public/images/about2.svg";
import iconeAbout from "../../public/images/logo-about.svg";
import maovermelha from "../../public/images/maovermelha.svg";
import menu1 from "../../public/images/menu.svg"
import menu2 from "../../public/images/menu2.svg"
import menu3 from "../../public/images/menu3.svg"
import socialmedia from "../../public/images/socialmedia.svg";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <main className="max-w-[80%] pb-28 flex flex-col">

      <section className="w-full h-[1050px] mt-24 flex flex-col justify-between">
        <div className="relative text-right -z-10">
          <h1
            className="text-[25rem] text-center text-[#8E2A1B] tracking-[2.8rem] leading-none"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
          >
            PALHA
          </h1>

          <h3
            className=" px-10 absolute right-[.1%] bottom-[16%] bg-[#FFF2D8] text-[5.7rem] text-[#8E2A1B] leading-none  rounded-sm"
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
          className="z-10 -mt-[15rem] w-full" />
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
                We're passionate about turning simple moments into something
                unforgettable — and we do it with Palha Italiana!
              </p>
              <p className="font-medium text-[25px]">
                Handmade with love, our{" "}
                <strong className="font-bold">Brazilian</strong> sweets mix
                tradition, creativity, and top-quality ingredients to deliver
                that perfect bite of happiness.
              </p>
              <p className="font-medium text-[25px]">
                Whether it's a treat for yourself or a gift for someone special,
                we're here to make life a little sweeter, one piece at a time.
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

          <div className="w-full flex flex-col gap-2">
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
          <div className="flex flex-col justify-between items-start lg:w-1/2">
            <div>
              <div className="flex flex-row items-start gap-2">
                <span className="text-[#8E2A1B] font-bold text-[12vw] leading-none tracking-tight">
                  SOC
                </span>
              </div>
              <div className="flex flex-row items-start gap-2">
                <span className="text-[#8E2A1B] font-bold text-[15vw] leading-none tracking-tight">
                  IAL
                </span>
                <span
                  className="text-[#8E2A1B] font-bold text-4xl ml-2 mt-4 tracking-widest"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  MEDIA
                </span>
              </div>
            </div>
            {/* Quadrado com follow us */}
            <div className="mt-8 bg-[#8E2A1B] w-[320px] h-[220px] flex flex-col justify-end p-6">
              <span className="text-[#FFF2D8] text-base tracking-widest flex items-center gap-2">
                follow us
                <span className="ml-2 w-8 h-px bg-[#FFF2D8] inline-block"></span>
                <span className="text-2xl">→</span>
              </span>
            </div>
          </div>
          {/* Coluna Direita */}
          <div className="hidden lg:flex flex-1 items-center justify-end ">
            {/* Substitua pelo seu SVG ou imagem */}
            <Image
              src={socialmedia}
              alt="Heart Cocoa"
              width={450}
              height={10}
              className="object-contain"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
