import Header from "@/components/ui/header";
import { ArrowLeft, Facebook, Instagram, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Registration() {
  return (
    <section className="lg:p-6 pt-6 bg-white">
      <div className="container grid gap-6 mx-auto text-center grid-cols-1 lg:grid-cols-2">
        <div className="max-w-[834px] max-h-[958px] rounded-2xl lg:border flex flex-col justify-between">
          <Header />
          <div className="lg:hidden">
            <Link href="/landing">
              <ArrowLeft className="text-primary border-2 border-primary rounded-full p-[1px]" />
            </Link>
            <div className="flex justify-center py-5">
              <Image
                src={"/assets/images/Group 69.svg"}
                width={70}
                height={87}
                alt="logo"
                className="w-[30%] md:w-[22%]"
              />
            </div>
          </div>
          <div className="w-full lg:py-5">
            <h1 className="text-4xl md:text-[3.8rem] font-semibold text-primary">
              Skapa ditt konto
            </h1>
            <p className="py-2 lg:py-5 text-primary text-md md:text-[1.3rem] font-medium">
              Fyll i uppgifterna nedan och börja <br /> chatta med
              bemanningsbolag
            </p>
            <div className="my-8 lg:my-0">
              <form className="bg-white">
                <div className="flex w-full lg:w-2/4 justify-center items-center border-2 border-primary py-2 px-3 rounded-full lg:rounded-2xl mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M25 26.25V23.75C25 22.4239 24.4732 21.1521 23.5355 20.2145C22.5979 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1521 5 22.4239 5 23.75V26.25"
                      stroke="#207579"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 13.75C17.7614 13.75 20 11.5114 20 8.75C20 5.98858 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98858 10 8.75C10 11.5114 12.2386 13.75 15 13.75Z"
                      stroke="#207579"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input
                    className="text-center outline-none border-none placeholder:text-secondary"
                    type="text"
                    name=""
                    id=""
                    placeholder="För- och efternamn"
                  />
                </div>
                <div className="flex w-full lg:w-2/4 justify-center items-center border-2 border-primary py-2 px-3 rounded-full lg:rounded-2xl mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M19.375 15.625H16.875V13.125H13.125V15.625H10.625V19.375H13.125V21.875H16.875V19.375H19.375V15.625Z"
                      stroke="#207579"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.125 23.125V10.625C3.125 9.96196 3.38839 9.32607 3.85723 8.85723C4.32607 8.38839 4.96196 8.125 5.625 8.125H7.535C7.92292 8.12503 8.30551 8.21532 8.6525 8.38875L10.0975 9.11125C10.4445 9.28468 10.8271 9.37497 11.215 9.375H18.785C19.1729 9.37497 19.5555 9.28468 19.9025 9.11125L21.3475 8.38875C21.6945 8.21532 22.0771 8.12503 22.465 8.125H24.375C25.038 8.125 25.6739 8.38839 26.1428 8.85723C26.6116 9.32607 26.875 9.96196 26.875 10.625V23.125C26.875 23.788 26.6116 24.4239 26.1428 24.8928C25.6739 25.3616 25.038 25.625 24.375 25.625H5.625C4.96196 25.625 4.32607 25.3616 3.85723 24.8928C3.38839 24.4239 3.125 23.788 3.125 23.125Z"
                      stroke="#207579"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.375 6.25L10.0425 5.02625C10.1501 4.82912 10.3088 4.66461 10.5019 4.55001C10.695 4.43541 10.9154 4.37496 11.14 4.375H18.86C19.0846 4.37496 19.305 4.43541 19.4981 4.55001C19.6912 4.66461 19.8499 4.82912 19.9575 5.02625L20.625 6.25"
                      stroke="#207579"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input
                    className="text-center outline-none border-none placeholder:text-secondary"
                    type="text"
                    name=""
                    id=""
                    placeholder="Yrke"
                  />
                </div>
                <div className="flex w-full lg:w-2/4 justify-center items-center border-2 border-primary py-2 px-3 rounded-full lg:rounded-2xl mb-4 mx-auto">
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
                    className="text-center outline-none border-none placeholder:text-secondary"
                    type="email"
                    name=""
                    id=""
                    placeholder="Mejladress"
                  />
                </div>
                <div className="flex w-full lg:w-2/4 justify-center items-center border-2 border-primary py-2 px-3 rounded-full lg:rounded-2xl mb-4 mx-auto">
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
                    className="text-center outline-none border-none placeholder:text-secondary"
                    type="password"
                    name=""
                    id=""
                    placeholder="Lösenord"
                  />
                </div>

                <Link
                  href="/admin"
                  role="button"
                  className="block w-full lg:w-2/4 mx-auto bg-primary mt-4 py-3 rounded-full lg:rounded-2xl font-inter text-[1.13rem] text-white font-semibold mb-2"
                >
                  Skapa konto
                </Link>
              </form>
            </div>
          </div>
          <div className="text-primary">
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
