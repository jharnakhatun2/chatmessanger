import Header from "@/components/ui/header";
import { ArrowLeft, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BorderButton from "@/components/ui/button";

export default function Landing() {
  return (
    <section className="lg:p-6  bg-white">
      <div className="container grid gap-6 mx-auto text-center grid-cols-1 lg:grid-cols-2 ">
        <div className="h-[100vh] lg:h-full max-w-[834px] max-h-[958px] rounded-2xl lg:border flex flex-col justify-between">
          <Header />
          <div className="lg:hidden pt-3">
            <Link href="/">
              <ArrowLeft className="text-primary border-2 border-primary rounded-full p-[1px]" />
            </Link>
            <div className="flex justify-center pt-5 pb-3">
              <Image
                src={"/assets/images/Group 69.svg"}
                width={70}
                height={87}
                alt="logo"
                className="w-[30%] md:w-[22%]"
              />
            </div>
          </div>
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
        <div className="max-w-[834px] max-h-[958px] hidden lg:flex rounded-2xl ">
          <Image
            className="w-full h-full lg:flex"
            src="/assets/images/image 41.png"
            width={923}
            height={899}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
