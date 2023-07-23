import NavMobile from "@/components/ui/nav-mobile";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Message() {
  return (
    <>
      <section className="bg-[#f5f5f5] h-[100vh] flex flex-col justify-between">
        <div>
          <NavMobile />
          <div className="flex gap-6 items-center px-6 py-2 shadow-lg bg-white">
            <ChevronLeft className="text-[#a7a5a5]" />
            <div className="font-inter leading-5">
              <h1 className="text-lg font-medium">Bertil från Bemanning AB</h1>
              <span className="text-sm text-[#a7a5a5]">
                SSK, Norrköping, VC
              </span>
            </div>
          </div>
          <div className="flex gap-3 px-6 py-10 items-end">
            <Image
              className="w-[32px] h-[32px]"
              src="/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png"
              width={32}
              height={32}
              alt=""
            />
            <div className="bg-white p-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
              <span>
                Hej! <br />
                Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="flex bg-white w-full justify-center items-center gap-2 py-2 px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-right bg-muted text-white p-1 rounded"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          <div className="w-full flex justify-between items-center bg-gray-200 font-inter border border-[#a7a5a5] py-2 px-3 rounded-full">
            <input
              type="text"
              placeholder="hey it's Apple's Keyboard"
              className="focus:outline-none bg-gray-200 text-sm"
            />
            <ArrowUp className="bg-green-600 text-white p-[2px] rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
}
