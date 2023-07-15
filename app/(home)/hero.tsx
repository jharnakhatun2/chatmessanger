import Image from "next/image";
import Searchbar from "./searchbar";

export default function Hero() {
  return (
    <div className="container ">
      <div className="items-center lg:flex flex-row-reverse">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            className="w-full h-full"
            src="/assets/images/image 40.png"
            width={923}
            height={899}
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-16">
          <div className="flex ">
            <h1 className="text-3xl font-semibold text-[#53CCD1] dark:text-white lg:text-[4rem] leading-none">
              Alla
              <span className="text-[#404040]"> konsultuppdrag samlade </span>
              på en sida
            </h1>
          </div>
          <div className="bg-primary z-20">
            <h1 className="text-primary text-7xl">Hello</h1>
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
}
