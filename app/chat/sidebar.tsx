import Brand from "@/components/brand";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const data = [
  {
    title: "Chaatt",
    icon: "/assets/icons/message-square.svg",
  },
  {
    title: "Bevakning",
    icon: "/assets/icons/folder-plus.svg",
  },
  {
    title: "Profil",
    icon: "/assets/icons/user.svg",
  },
  {
    title: "Logga ut",
    icon: "/assets/icons/log-out.svg",
  },
  {
    title: "Inställningar",
    icon: "/assets/icons/settings1.svg",
  },
];

export default function Sidebar() {
  return (
    <div className=" flex flex-col justify-between items-center w-[30%] h-[100vh] p-3 bg-background rounded-2xl">
      <Brand />
      <div className="leading-10 font-inter">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex gap-5 py-2 hover:cursor-pointer">
              <Image
                className=""
                src={item.icon}
                width={28}
                height={30}
                alt=""
              />
              <h2 className="text-xl">{item.title}</h2>
            </div>
          );
        })}
      </div>
      <div className="">
        <p>Logga in via sociala media</p>
        <div className="flex gap-2 justify-center items-center py-3">
          <Facebook className="text-primary border border-primary rounded-full w-[35px] h-[35px] p-[5px]" />
          <Instagram className="text-primary border border-primary rounded-full w-[35px] h-[35px] p-[5px]" />
        </div>
      </div>
    </div>
  );
}
