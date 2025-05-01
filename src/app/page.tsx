import Image from "next/image";
import Header from "../components/Header";
import palha from "../../public/images/palha2.svg";

export default function Home() {
  return (
    <div className="max-w-[90%]">
      <Header />

      <section className="w-full ">
        <div className="relative text-right -z-10">
          <h1 className="text-[23.5rem] text-center text-[#8E2A1B] tracking-wider"  style={{ fontFamily: 'var(--font-cinzel)', fontWeight:500 }}>PALHA</h1>

          <h3 className=" px-6 absolute right-[.9%] bottom-[26%] bg-[#FFF2D8] text-[5.7rem] text-[#8E2A1B] leading-none  rounded-sm" style={{ fontFamily: 'var(--font-cinzel) ', fontWeight:400}}>italiana</h3>
        </div>
        <Image src={palha} width={1340} height={12} alt="Palha Italiana" className="z-10 -mt-[15rem]"/>
      </section>

    </div>
  );
}
