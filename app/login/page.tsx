import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container grid gap-6 mx-auto text-center grid-cols-1 lg:grid-cols-2">
        <div className="w-full px-6 py-16 rounded-3xl border">
          <h1 className="text-[3.8rem] font-semibold text-primary">
            Välkommen tillbaka
          </h1>
          <p className="text-primary text-[1.7rem] font-medium">
            Logga in och börja chatta med <br />
            bemanningsbolag
          </p>
          <div className="my-10">
            <form className="bg-white">
              <div className="flex w-1/2 justify-center items-center border-2 border-primary py-2 px-3 rounded-2xl mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z"
                    stroke="#207579"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.5 7.5L15 16.25L2.5 7.5"
                    stroke="#207579"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none placeholder:text-secondary"
                  type="email"
                  name=""
                  id=""
                  placeholder="Mejladress"
                />
              </div>
              <div className="flex w-1/2 justify-center items-center border-2 border-primary py-2 px-3 rounded-2xl mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M23.75 13.75H6.25C4.86929 13.75 3.75 14.8693 3.75 16.25V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V16.25C26.25 14.8693 25.1307 13.75 23.75 13.75Z"
                    stroke="#207579"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.75 13.75V8.75C8.75 7.0924 9.40848 5.50269 10.5806 4.33058C11.7527 3.15848 13.3424 2.5 15 2.5C16.6576 2.5 18.2473 3.15848 19.4194 4.33058C20.5915 5.50269 21.25 7.0924 21.25 8.75V13.75"
                    stroke="#207579"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none placeholder:text-secondary"
                  type="password"
                  name=""
                  id=""
                  placeholder="Lösenord"
                />
              </div>

              <Link
                href="/admin"
                role="button"
                type="submit"
                className="block w-1/2 mx-auto bg-primary mt-4 py-2 rounded-2xl font-inter text-[1.13rem] text-white font-semibold mb-2"
              >
                Logga in
              </Link>
            </form>
          </div>
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
