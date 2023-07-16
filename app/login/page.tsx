import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container grid gap-6 mx-auto text-center grid-cols-1 lg:grid-cols-2">
        <div className="w-full px-6 py-16 rounded-3xl border">
          <h1 className="text-5xl font-extrabold dark:text-gray-50">
            Välkommen till <span className="text-secondary">Konsulta.se</span>
          </h1>

          <div>
            <p>Logga in via sociala media</p>
            <div className="flex gap-2 justify-center items-center py-3">
              <Facebook className="text-primary border border-primary rounded-full w-[35px] h-[35px] p-[5px]" />
              <Instagram className="text-primary border border-primary rounded-full w-[35px] h-[35px] p-[5px]" />
            </div>
          </div>
        </div>
        <Image
          className="w-full h-full hidden  lg:flex"
          src="/assets/images/image 40.png"
          width={923}
          height={899}
          alt=""
        />
      </div>
    </section>
  );
}
