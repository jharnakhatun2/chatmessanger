import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import { ArrowLeft, Search } from "lucide-react";
import Image from "next/image";

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
    <section className="px-0 lg:px-20 py-10">
      <div className="container">
        <div className="flex items-center cursor-pointer text-primary">
          <ArrowLeft />
          <h2 className="text-[1.5rem] font-inter">Meny</h2>
        </div>
        <Divider />
        <div className="pt-6 flex flex-wrap gap-5">
          <div className="relative flex items-center border-2 border-primary rounded-xl font-inter">
            <Search className="mx-2" />
            <input
              type="text"
              id="first_name"
              className="rounded-xl text-foreground pl-3 h-10 bg-white hover:border-none focus:outline-none appearance-none w-full"
              placeholder="Sök"
              required
            />
          </div>
          <div className="border-2 border-primary rounded-xl font-inter">
            <input
              type="text"
              id="first_name"
              className="rounded-xl text-foreground pl-3 h-10 bg-white hover:border-none focus:outline-none appearance-none text-center"
              placeholder="Stad"
              required
            />
          </div>
          <div className="border-2 border-primary rounded-xl font-inter">
            <input
              type="text"
              id="first_name"
              className="rounded-xl text-foreground pl-3 h-10 bg-white hover:border-none focus:outline-none appearance-none text-center"
              placeholder="Yrke"
              required
            />
          </div>
        </div>

        <div className="flex flex-col divide-y divide-[#EBEBEB]">
          {userInfo.map((data, index) => {
            return (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
