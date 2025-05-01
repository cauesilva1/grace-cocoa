import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <Header />

      <section className="w-full ">
        <div className=" text-right">
          <h1 className=" relative w-full text-[23.5rem] text-center m-0 p-0 leading-none text-[#8E2A1B]"  style={{ fontFamily: 'var(--font-cinzel)', fontWeight:500 }}>PALHA</h1>

          <h3 className=" px-4 absolute right-0.5 bottom-[36%] bg-[#FFF2D8] text-[5.7rem] text-[#8E2A1B] leading-none  rounded-sm" style={{ fontFamily: 'var(--font-cinzel) ', fontWeight:400}}>italiana</h3>
        </div>
      </section>

    </div>
  );
}
