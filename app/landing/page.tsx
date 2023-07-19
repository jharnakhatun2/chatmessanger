import Header from "@/components/ui/header";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BorderButton from "@/components/ui/button";

export default function Landing() {
  return (
    <section className="p-6 bg-white">
      <div className="container grid gap-6 mx-auto text-center grid-cols-1 lg:grid-cols-2">
        <div className=" max-w-[834px] max-h-[958px] rounded-2xl border flex flex-col justify-between">
          <Header />
          <div className="w-full ">
            <h1 className="text-3xl md:text-[3.8rem] font-semibold leading-[1.2]">
              Välkommen till
              <br /> <span className="text-secondary">Konsulta.se</span>
            </h1>

            <div className="lg:flex flex-wrap gap-2 my-10 justify-center">
              <Link href="/login">
                <div className="w-full">
                  <BorderButton outline>Logga in</BorderButton>
                </div>
              </Link>
              <Link href="/registration">
                <div className="w-full pt-3 lg:pt-0">
                  <BorderButton secondary>Skapa ett konto</BorderButton>
                </div>
              </Link>
            </div>
          </div>
          <div className="pb-5">
            <p>Logga in via sociala media</p>
            <div className="flex gap-2 justify-center items-center py-3">
              <Facebook className="text-primary border border-primary rounded-full w-[35px] h-[35px] p-[5px]" />
              <Instagram className="text-primary border border-primary rounded-full w-[35px] h-[35px] p-[5px]" />
            </div>
          </div>
        </div>
        <div className="max-w-[834px] max-h-[958px] rounded-2xl ">
          <Image
            className="w-full h-full lg:flex"
            src="/assets/images/image 40.png"
            width={923}
            height={899}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
