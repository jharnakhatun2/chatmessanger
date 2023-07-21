import Image from "next/image";
import Searchbar from "./searchbar";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="bg-accent ">
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
            <div className="flex font-inter divide-x-2 divide-primary items-center justify-center py-8 lg:hidden">
              <div className="text-center pr-3 md:pr-8">
                <p className="text-sm text-primary">Konsulter</p>
                <h1 className="text-2xl text-primary font-bold">+200</h1>
              </div>
              <div className="text-center px-3 md:px-8">
                <p className="text-sm text-primary">Jobbannonser</p>
                <h1 className="text-2xl text-primary font-bold">+1000</h1>
              </div>
              <div className="text-center pl-3 md:pl-8">
                <p className="text-sm text-primary">Chatta med</p>
                <h1 className="text-2xl text-primary font-bold">+20</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:hidden mx-5 pb-5">
        <div className="font-inter">
          <p className="font-medium pt-3 text-[#adacac]">
            Se de senaste annonserna:
          </p>
          <h1 className="text-primary text-2xl font-medium">
            Hitta ditt nästa uppdrag!
          </h1>
        </div>
        {userInfo.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center shadow-lg my-10 p-3 rounded-2xl"
            >
              <div className="font-inter">
                <h2 className="text-lg">{item.title}</h2>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="font-semibold text-sm">{item.period}</p>
                <p className="text-sm">{item.time}</p>
                <p className="text-secondary text-sm">Läs mer</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="bg-[#d9d9d9] w-[50px] h-[50px] rounded-full"></div>
                <div>
                  <span className="bg-secondary text-white px-3 py-2 rounded-xl">
                    Chatta nu
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
const userInfo = [
  {
    id: 1,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    title: "SSK, Avdelning, Stad",
    name: "Företagests namn",
    period: "Period",
    info: "Info",
    time: "320-400 kr/timme",
    description:
      "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text ",
  },
  {
    id: 2,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    title: "SSK, Avdelning, Stad",
    name: "Företagests namn",
    period: "Period",
    info: "Info",
    time: "320-400 kr/timme",
    description:
      "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text ",
  },
  {
    id: 3,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    title: "SSK, Avdelning, Stad",
    name: "Företagests namn",
    period: "Period",
    info: "Info",
    time: "320-400 kr/timme",
    description:
      "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text ",
  },
  {
    id: 4,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    title: "SSK, Avdelning, Stad",
    name: "Företagests namn",
    period: "Period",
    info: "Info",
    time: "320-400 kr/timme",
    description:
      "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text ",
  },
  {
    id: 5,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    title: "SSK, Avdelning, Stad",
    name: "Företagests namn",
    period: "Period",
    info: "Info",
    time: "320-400 kr/timme",
    description:
      "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text ",
  },
];
