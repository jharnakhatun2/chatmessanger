import Brand from "@/components/brand";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const data = [
  {
    title: "Chaatt",
    icon: "/assets/icons/message-square.svg",
    textColor: "#404040",
  },
  {
    title: "Bevakning",
    icon: "/assets/icons/folder-plus.svg",
    textColor: "#c7c7c7c",
  },
  {
    title: "Profil",
    icon: "/assets/icons/user.svg",
    textColor: "#c7c7c7c",
  },
  {
    title: "Logga ut",
    icon: "/assets/icons/log-out.svg",
    textColor: "#c7c7c7c",
  },
  {
    title: "Inställningar",
    icon: "/assets/icons/settings1.svg",
    textColor: "#c7c7c7c",
  },
];

export default function Sidebar() {
  return (
    <div className=" hidden h-[100vh] lg:flex flex-col justify-between items-center p-3 bg-white rounded-2xl ">
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
              <h2
                className={`text-xl text-[${item.textColor}]`}
                style={{ color: `${item.textColor}` }}
              >
                {item.title}
              </h2>
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
