import Image from "next/image";
import Searchbar from "./searchbar";

interface CompType {
  id: number | string;
  image?: string;
  name: string;
  period: string;
  title: string;
  info: string;
  time: string;
  star?: string;
  message?: string;
  chat?: string;
  elips?: string;
}

const userInfo: CompType[] = [
  {
    id: 1,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    title: "SSK, Avdelning, Stad",
    name: "Företagests namn",
    period: "Period",
    info: "Info",
    time: "320-400 kr/timme",
    chat: "Chatta nu",
    elips: "/assets/icons/Ellipse 5.svg",
  },
  {
    id: 2,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    title: "SSK, Avdelning, Stad",
    name: "Företagests namn",
    period: "Period",
    info: "Info",
    time: "320-400 kr/timme",
    star: "/assets/icons/star.svg",
    message: "/assets/icons/message-circle2.svg",
  },
  {
    id: 3,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    title: "SSK, Avdelning, Stad",
    name: "Företagests namn",
    period: "Period",
    info: "Info",
    time: "320-400 kr/timme",
    chat: "Chatta nu",
    elips: "/assets/icons/Ellipse 5.svg",
  },
  {
    id: 4,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    title: "SSK, Avdelning, Stad",
    name: "Företagests namn",
    period: "Period",
    info: "Info",
    time: "320-400 kr/timme",
    chat: "Chatta nu",
    elips: "/assets/icons/Ellipse 5.svg",
  },
  {
    id: 5,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    title: "SSK, Avdelning, Stad",
    name: "Företagests namn",
    period: "Period",
    info: "Info",
    time: "320-400 kr/timme",
    star: "/assets/icons/star.svg",
    message: "/assets/icons/message-circle2.svg",
  },
  {
    id: 5,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    title: "SSK, Avdelning, Stad",
    name: "Företagests namn",
    period: "Period",
    info: "Info",
    time: "320-400 kr/timme",
    chat: "Chatta nu",
    elips: "/assets/icons/Ellipse 5.svg",
  },
];
export default function Hero() {
  return (
    <>
      <section className="bg-accent ">
        <div className="lg:container flex-row-reverse items-center grid-cols-2 lg:grid">
          <div className="flex items-center justify-center w-full">
            <Image
              className="w-full h-full hidden lg:flex"
              src="/assets/images/image 40.png"
              width={923}
              height={899}
              alt=""
            />
            <Image
              className="w-full h-full lg:hidden"
              src="/assets/images/image 46.png"
              width={923}
              height={899}
              alt=""
            />
          </div>
          <div className="-mt-[47%] md:-mt-[30%] lg:-mt-0 order-first w-full lg:pl-16 px-5 lg:px-0">
            <h1 className="text-4xl md:text-6xl xl:text-[4.8rem] leading-none font-semibold text-[#53CCD1] pb-5">
              Alla{" "}
              <span className="text-white lg:text-[#404040]">
                konsultuppdrag samlade
              </span>{" "}
              på en sida
            </h1>
            <Searchbar />
            <div className="flex font-inter divide-x-2 divide-primary items-center justify-center py-7 lg:hidden">
              <div className="text-center pr-2 md:pr-8">
                <p className="text-sm text-primary">Konsulter</p>
                <h1 className="text-2xl text-primary font-bold">+200</h1>
              </div>
              <div className="text-center px-2 md:px-8">
                <p className="text-sm text-primary">Jobbannonser</p>
                <h1 className="text-2xl text-primary font-bold">+1000</h1>
              </div>
              <div className="text-center pl-2 md:pl-8">
                <p className="text-sm text-primary">Chatta med</p>
                <h1 className="text-2xl text-primary font-bold">+20</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:hidden mx-3 pb-5 mt-3 z-30">
        <div className="font-inter">
          <p className="font-medium pt-3 text-[#adacac] text-sm">
            Se de senaste annonserna:
          </p>
          <h1 className="text-primary text-xl font-medium">
            Hitta ditt nästa uppdrag!
          </h1>
        </div>
        {userInfo.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center shadow lg:shadow-lg my-10 p-3 rounded-2xl"
            >
              <div className="font-inter">
                <h2 className="text-lg">{item.title}</h2>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="font-semibold text-sm">{item.period}</p>
                <p className="text-sm">{item.time}</p>
                <p className="text-secondary text-sm">Läs mer</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                {item.elips && (
                  <div>
                    <Image
                      src={item.elips}
                      width={50}
                      height={50}
                      alt="Star Icon"
                      className="rounded-full"
                    />
                  </div>
                )}
                {item.star && (
                  <div>
                    <Image
                      src={item.star}
                      width={30}
                      height={30}
                      alt="Star Icon"
                    />
                  </div>
                )}
                <div>
                  {item.message && (
                    <div className="bg-secondary rounded-full p-1 ">
                      <Image
                        src={item.message}
                        width={30}
                        height={30}
                        alt="Message Icon"
                      />
                    </div>
                  )}
                  {item.chat && (
                    <div>
                      <span className="text-sm bg-secondary text-white px-3 py-2 rounded-xl">
                        {item.chat}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
