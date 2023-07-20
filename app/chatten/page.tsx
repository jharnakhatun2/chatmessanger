import NavMobile from "@/components/ui/nav-mobile";
import { ChevronRight, MessageCircle, Search } from "lucide-react";
import Link from "next/link";

export default function Chatten() {
  return (
    <>
      <NavMobile />
      <section className="bg-[#f5f5f5] ">
        <div className="w-full h-[721px] bg-[url('https://i.ibb.co/5c67Q7s/bggray.png')] bg-fit bg-no-repeat">
          <div className="px-5 ">
            <h2 className="text-secondary font-medium text-4xl py-6">
              Chatten
            </h2>
            {/* search bar */}
            <div className="flex gap-5 bg-[#d9d9d9] px-3 py-2 mb-4 rounded-3xl shadow-lg text-center">
              <Search className=" text-muted p-[2px] rounded-xl w-[28px] h-[28px]" />
              <input
                className="text-muted font-medium font-inter bg-[#d9d9d9] focus:outline-none placeholder:text-[#a19e9e]"
                placeholder="Sök i chatten"
                type="text"
              />
            </div>
            {data.map((item, index) => {
              return (
                <div key={index} className="py-3">
                  <Link href="/message">
                    <div className="flex justify-between items-center bg-white px-3 py-2 rounded-3xl shadow-lg">
                      <div className="flex gap-6 items-center">
                        <MessageCircle className="bg-green-500 text-white p-[2px] rounded-xl w-[35px] h-[35px]" />
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.name}</p>
                        </div>
                      </div>
                      <ChevronRight className="text-muted" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

const data = [
  {
    title: "Bertil från Bemanning AB",
    name: "SSK, Norrköping, VC",
  },
  {
    title: "Bertil från Bemanning AB",
    name: "SSK, Norrköping, VC",
  },
  {
    title: "Bertil från Bemanning AB",
    name: "SSK, Norrköping, VC",
  },
  {
    title: "Bertil från Bemanning AB",
    name: "SSK, Norrköping, VC",
  },
];
