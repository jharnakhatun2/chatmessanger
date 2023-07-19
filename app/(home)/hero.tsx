import Image from "next/image";
import Searchbar from "./searchbar";

export default function Hero() {
  return (
    <div className="bg-accent ">
      <div className="lg:container flex-row-reverse items-center grid-cols-2 lg:grid">
        <div className="flex items-center justify-center w-full">
          <Image
            className="w-full h-full"
            src="/assets/images/image 40.png"
            width={923}
            height={899}
            alt=""
          />
        </div>
        <div className="-mt-[45%] md:-mt-[30%] lg:-mt-0 order-first w-full lg:pl-16 px-5 lg:px-0">
          <h1 className="text-4xl md:text-6xl xl:text-[4.8rem] leading-none font-semibold text-[#53CCD1] pb-5">
            Alla{" "}
            <span className="text-white lg:text-[#404040]">
              konsultuppdrag samlade
            </span>{" "}
            på en sida
          </h1>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}
