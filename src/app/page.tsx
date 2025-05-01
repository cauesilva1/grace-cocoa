import Image from "next/image";
import Header from "../components/Header";
import palha from "../../public/images/palha2.svg";
import about from "../../public/images/about.svg";
import iconeAbout from "../../public/images/logo-about.svg"


export default function Home() {
  return (
    <div className="max-w-[90%] pb-28 flex flex-col ">
      <Header />

      <section className="w-full">
        <div className="relative text-right -z-10">
          <h1
            className="text-[23.5rem] text-center text-[#8E2A1B] tracking-wider"
            style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}
          >
            PALHA
          </h1>

          <h3
            className=" px-6 absolute right-[.9%] bottom-[26%] bg-[#FFF2D8] text-[5.7rem] text-[#8E2A1B] leading-none  rounded-sm"
            style={{ fontFamily: "var(--font-cinzel) ", fontWeight: 400 }}
          >
            italiana
          </h3>
        </div>
        <Image
          src={palha}
          width={1450}
          height={12}
          alt="Palha Italiana"
          className="z-10 -mt-[15rem]"
        />
      </section>

      <section className="w-full flex justify-between gap-10 text-[#8E2A1B] mt-28">
        <Image src={about} width={550} height={8} alt="Foto palha italiana" />

        <div className="max-w-[841px] flex flex-col text-justify justify-center gap-14">
          <div className="flex justify-center">
            <h3 className="text-[#8E2A1B] text-[90px]"
             style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}>ABOUT US</h3>
            <Image src={iconeAbout} width={100} height={4} alt="Icone mascote" />

          </div>

          <div className="flex flex-col gap-8 ">
            <p className="font-medium text-[25px]">
              We’re passionate about turning simple moments into something
              unforgettable — and we do it with Palha Italiana!
            </p>
            <p className="font-medium text-[25px]">
              Handmade with love, our <strong className="font-bold">Brazilian</strong> sweets mix tradition, creativity,
              and top-quality ingredients to deliver that perfect bite of
              happiness.
            </p>
            <p className="font-medium text-[25px]">
              Whether it’s a treat for yourself or a gift for someone special,
              we’re here to make life a little sweeter, one piece at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
