import Image from "next/image";
import Divider from "./ui/divider";
import { Facebook, Instagram } from "lucide-react";

export default function FooterMobile() {
  return (
    <div className="bg-primary p-5 text-white md:hidden">
      <div className="flex gap-1 items-center">
        <Image
          className=""
          src={"/assets/icons/Group 72.svg"}
          width={70}
          height={86.86}
          alt=""
        />
        <h1 className="text-5xl font-inter">Konsulta.se</h1>
      </div>
      <div className="px-4">
        <div className="leading-5">
          {pragraph.map((item, index) => (
            <p key={index} className="text-xl leading-10">
              {item}
            </p>
          ))}
        </div>
        <Divider />
        <div className="flex gap-3 py-5 -mb-7">
          <Facebook className="text-primary bg-white rounded-full w-[50px] h-[50px] p-1" />
          <Instagram className="text-primary bg-white rounded-full w-[50px] h-[50px] p-1" />
        </div>
        <Divider />
        <div className="pt-2 -mb-3">
          <p className="text-xl leading-10">Allmänna villkor</p>
          <p className="text-xl leading-10">Integritetspolicy</p>
        </div>
        <Divider />
        <div className="pt-2 pb-6">
          <p className="text-xl leading-10">Öppet dygnet runt!</p>
          <p className="text-sm">
            ReceptOnline.se ägs och drivs av eHealthcare Group AB (559322-9858)
          </p>
        </div>
      </div>
    </div>
  );
}

const pragraph = [
  "Hem",
  "Diagnoser",
  "Om oss",
  "Frågor & svar",
  "Kontakta oss",
  "Jobba på ReceptOnline",
];
