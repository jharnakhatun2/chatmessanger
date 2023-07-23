import Slider from "@/components/slider";
import Slider2 from "@/components/slider2";
import Divider from "@/components/ui/divider";
import FlexibleDivider from "@/components/ui/flexible-devider";
import Nav from "@/components/ui/nav";
import NavMobile from "@/components/ui/nav-mobile";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Nav />
      <NavMobile />
      <section className="px-0 lg:px-20 py-6 lg:py-10">
        <div className="container">
          <Link href="/listings">
            <div className="flex items-center cursor-pointer text-primary">
              <ArrowLeft />
              <h2 className="font-inter text-xl md:text-3xl">Din sökning</h2>
            </div>
          </Link>
          <div className="py-6">
            <div className="relative">
              <Image
                className="w-full"
                src="/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png"
                width={1118}
                height={400}
                alt=""
              />
              <Link
                href="/message"
                className="absolute right-2 bottom-3 bg-white px-2 py-1 flex gap-2 rounded-xl items-center lg:hidden"
              >
                <MessageCircle className="text-secondary w-[20px] h-[25px]" />
                <h2 className="text-secondary text-lg">Chatta nu</h2>
              </Link>
            </div>
            <div className="lg:flex gap-6 py-6 w-full">
              <div className="w-full pb-10 lg:pb-0">
                <div className="font-inter lg:border-2 border-secondary rounded-2xl px-0 py-0 lg:px-3 lg:py-2">
                  <h2 className="text-lg lg:text-2xl">SSK, Avdelning, Stad</h2>
                  <p className="font-bold">Företagests namn</p>
                  <p className="font-bold">Period</p>
                  <p className="font-bold">320-400 kr/timme</p>
                </div>
                <p className=" py-6 lg:py-10 overlay">
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text Text Text Text Text Text
                  Text Text Text Text Text Text Text{" "}
                </p>
                <div className="inline-block relative w-full md:w-64">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-6 text-secondary">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                  <select className=" text-sm block appearance-none w-full bg-white border border-secondary hover:border-secondary px-4 py-3 pl-12 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-secondary font-inter ">
                    <option>Visa hela beskrivningen</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
              <div className="bg-accent w-full h-full lg:w-[407px] lg:h-[200px] rounded-lg p-5 font-inter">
                <div className="flex justify-between pb-5">
                  <div>
                    <h4 className="text-primary font-medium">Kontakt</h4>
                    <h4 className="text-black font-medium text-lg">
                      Sara Ekblom
                    </h4>
                    <h4 className="text-muted font-medium -mt-2 text-lg">
                      Läkarleasing AB
                    </h4>
                  </div>
                  <Image
                    className=""
                    src="/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png"
                    width={90}
                    height={90}
                    alt=""
                  />
                </div>
                <Link href="/message">
                  <div className="flex gap-5 bg-secondary text-white justify-center items-center rounded-lg py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="32"
                      viewBox="0 0 30 32"
                      fill="none"
                    >
                      <path
                        d="M3.75 15.0269C3.74569 16.7516 4.13116 18.4529 4.875 19.9923C5.75695 21.837 7.11281 23.3886 8.79069 24.4733C10.4686 25.558 12.4022 26.133 14.375 26.1338C16.0248 26.1382 17.6524 25.7353 19.125 24.9577L26.25 27.4404L23.875 19.9923C24.6188 18.4529 25.0043 16.7516 25 15.0269C24.9992 12.9646 24.4492 10.9433 23.4116 9.18936C22.374 7.43539 20.8897 6.01805 19.125 5.0961C17.6524 4.31853 16.0248 3.91558 14.375 3.92008H13.75C11.1446 4.07034 8.68369 5.21992 6.83857 7.14872C4.99345 9.07752 3.89374 11.65 3.75 14.3736V15.0269Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-lg">Chatta nu</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <FlexibleDivider content="Liknande uppdrag" />
            <Slider />
          </div>
          <div className="py-10 md:hidden">
            <FlexibleDivider content="Artiklar från Konsulta" />
            <Slider2 />
          </div>
        </div>
      </section>
    </>
  );
}
