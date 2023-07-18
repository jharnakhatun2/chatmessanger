import Button from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import Image from "next/image";
import Link from "next/link";

export default function Admin() {
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
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
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
          <Button outline>Redigera profil</Button>
        </div>
        <Divider />
        <div className="mx-auto grid md:justify-center lg:justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3 py-6">
          {data.map((item, index) => {
            return (
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
                <Link href="/">
                  <h3 className="text-primary text-[1.9rem] font-medium">
                    {item.title}
                  </h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
