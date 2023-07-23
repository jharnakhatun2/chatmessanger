import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Nav from "@/components/ui/nav";
import NavMobile from "@/components/ui/nav-mobile";
import { ArrowLeft, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export default function Listing() {
  const data = [
    {
      title: "Skapa annons",
      icon: "/assets/icons/plus-circle.svg",
    },
    {
      title: "Chatten",
      icon: "/assets/icons/message-circle.svg",
    },
    {
      title: "Konto inställningar",
      icon: "/assets/icons/settings.svg",
    },
    {
      title: "Mina annonser",
      icon: "/assets/icons/edit.svg",
    },
  ];

  return (
    <>
      <Nav />
      <NavMobile />
      <section className="px-0 lg:px-20 py-10 hidden lg:flex">
        <div className="container">
          <Link href="/">
            <div className="flex items-center cursor-pointer text-primary">
              <ArrowLeft />
              <h2 className="text-[1.5rem] font-inter">Meny</h2>
            </div>
          </Link>
          <Divider />
          <div className="pt-6 flex flex-wrap w-full gap-3">
            <div className="relative flex items-center border-2 border-primary rounded-xl font-inter w-full md:w-5/12">
              <Search className="mx-2" />
              <input
                type="text"
                id="first_name"
                className="rounded-xl text-foreground pl-3 h-10 bg-white hover:border-none focus:outline-none appearance-none w-full"
                placeholder="Sök"
                required
              />
            </div>
            <div className="border-2 border-primary rounded-xl font-inter w-full md:w-3/12">
              <input
                type="text"
                id="first_name"
                className="rounded-xl text-foreground  h-10 bg-white hover:border-none focus:outline-none appearance-none text-center w-full"
                placeholder="Stad"
                required
              />
            </div>
            <div className="border-2 border-primary rounded-xl font-inter w-full md:w-3/12">
              <input
                type="text"
                id="first_name"
                className="rounded-xl text-foreground h-10 bg-white hover:border-none focus:outline-none appearance-none text-center w-full"
                placeholder="Yrke"
                required
              />
            </div>
          </div>

          <div className="flex flex-col divide-y divide-[#EBEBEB]">
            {userInfo.map((data, index) => {
              return (
                <>
                  <Link href="/listing">
                    <div
                      key={index}
                      className="flex justify-between items-center py-6"
                    >
                      <div className="flex gap-5">
                        <Image
                          className=""
                          src={data.image}
                          width={264}
                          height={131}
                          alt=""
                        />

                        <div className="font-inter">
                          <h2>{data.title}</h2>
                          <p className="font-bold">{data.period}</p>
                          <p className="font-bold">{data.info}</p>
                          <p className="font-bold">{data.time}</p>
                        </div>
                      </div>
                      <div>
                        <Button outline>Redigera annonsen</Button>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section className="lg:hidden mx-5 h-[1320px]">
        <div className="pb-5">
          <div className="bg-accent shadow-lg flex gap-5 justify-center items-center py-2 rounded-2xl">
            <select className="bg-accent text-xl text-primary px-6 focus:outline-none">
              <option>Sökfilter</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <p className="font-medium pt-3 text-[#adacac]">
            198 matchande tjänster.
          </p>
        </div>
        {userInfo.map((item, index) => {
          return (
            <Link key={index} href="/listing">
              <div className="flex justify-between items-center shadow-lg my-10 p-3 rounded-2xl">
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
                    <span className="bg-secondary text-white px-3 py-2 rounded-xl text-sm md:text-lg">
                      Chatta nu
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
