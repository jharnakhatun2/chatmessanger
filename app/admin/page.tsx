import Divider from "@/components/ui/divider";
import Nav from "@/components/ui/nav";
import NavMobile from "@/components/ui/nav-mobile";
import { ChevronRight, MessageCircle, Settings, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Admin() {
  const data = [
    {
      title: "Skapa annons",
      icon: "/assets/icons/plus-circle.svg",
      route: "/",
    },
    {
      title: "Chatten",
      icon: "/assets/icons/message-circle.svg",
      route: "/chat",
    },
    {
      title: "Konto inställningar",
      icon: "/assets/icons/settings.svg",
      route: "/",
    },
    {
      title: "Mina annonser",
      icon: "/assets/icons/edit.svg",
      route: "/listings",
    },
  ];

  return (
    <>
      <Nav />
      <NavMobile />
      <section className="px-0 lg:px-20 py-0 md:py-10 bg-[f4f4f4]">
        {/* For medium and large device */}
        <div className="container hidden md:flex flex-col">
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <div className="lg:flex items-center gap-3">
              <Image
                className=""
                src={"/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png"}
                width={122}
                height={122}
                alt=""
              />
              <div className="font-inter">
                <h3 className="text-black font-medium">Sara Ekblom</h3>
                <p className="text-[#636363]">Läkarleasing AB</p>
              </div>
            </div>
            <button className="text-secondary border-2 border-secondary w-[264px] h-[56px] text-xl rounded-lg">
              Redigera profil
            </button>
          </div>
          <Divider />
          <div className="grid md:justify-center lg:justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3 py-6">
            {data.map((item, index) => {
              return (
                <>
                  <Link href={item.route}>
                    <div
                      key={index}
                      className="bg-accent text-center rounded-2xl flex flex-col items-center justify-center max-w-[340px] py-10 px-3"
                    >
                      <Image
                        className=""
                        src={item.icon}
                        width={50}
                        height={50}
                        alt=""
                      />

                      <h3 className="text-primary text-[1.9rem] font-medium">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        {/* For mobile device only */}
        <div className="pb-20 md:hidden">
          <div className="relative w-full h-[249.813px] flex justify-center items-center flex-col">
            <div className="bg-[url('https://i.ibb.co/cTjs5RN/bgImage.png')] bg-fit bg-no-repeat ">
              <div
                className="w-full h-[249.813px] flex  justify-center items-center 
             bg-[#80d9dcea] backdrop-brightness-75"
              >
                <div className="w-[100vw] pb-5 text-center ">
                  <Image
                    className="w-[20%] mx-auto"
                    src={
                      "/assets/images/Skärmavbild 2023-04-26 kl. 18.10 2.png"
                    }
                    width={122}
                    height={122}
                    alt=""
                  />
                  <h3 className="text-white font-medium pt-2">Sara Ekblom</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full absolute -mt-8 text-muted">
            <Link href="/chat">
              <div className="w-11/12 mx-auto flex justify-between items-center bg-white p-3 rounded-3xl shadow-lg">
                <div className="flex gap-5 items-center">
                  <MessageCircle className="bg-green-500 text-white p-[2px] rounded-xl w-[35px] h-[35px]" />
                  <h3>Chattar</h3>
                </div>
                <ChevronRight className="text-muted" />
              </div>
            </Link>
          </div>
          <div className="w-full pt-20 text-muted">
            <div className="w-11/12 mx-auto shadow-lg rounded-3xl bg-white divide-y divide-gray-200 px-3">
              <div className=" flex justify-between items-center py-3">
                <div className="flex gap-5 items-center">
                  <div className="bg-[#ff9494] text-white p-[2px] rounded-xl w-[35px] h-[35px]"></div>
                  <h3>annat</h3>
                </div>
                <ChevronRight className="text-muted" />
              </div>
              <div>
                <Link href="/">
                  <div className=" flex justify-between items-center py-3">
                    <div className="flex gap-5 items-center">
                      <User2 className="bg-[#5395d1] text-white p-[2px] rounded-xl w-[35px] h-[35px]" />
                      <h3>Min profil</h3>
                    </div>
                    <ChevronRight className="text-muted" />
                  </div>
                </Link>
              </div>
              <div className=" flex justify-between items-center py-3">
                <div className="flex gap-5 items-center">
                  <Settings className="bg-muted text-white p-[2px] rounded-xl w-[35px] h-[35px]" />
                  <h3>Inställningar</h3>
                </div>
                <ChevronRight className="text-muted" />
              </div>
              <div className=" flex justify-between items-center py-3">
                <div className="flex gap-5 items-center">
                  <div className="bg-muted text-white p-[2px] rounded-xl w-[35px] h-[35px]"></div>
                  <h3>Sparade annonser</h3>
                </div>
                <ChevronRight className="text-muted" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
