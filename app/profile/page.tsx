import NavMobile from "@/components/ui/nav-mobile";
import { ChevronRight, Settings, User2 } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <NavMobile />
      <section className="bg-[#f5f5f5] ">
        <div className="w-full h-[721px] bg-[url('https://i.ibb.co/5c67Q7s/bggray.png')] bg-fit bg-no-repeat">
          <div className="px-5 ">
            <h2 className="text-secondary font-medium text-4xl py-6">
              Min profil
            </h2>

            <div className="w-full text-muted">
              <div className="shadow-lg rounded-3xl bg-white divide-y divide-gray-200 px-3">
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
        </div>
      </section>
    </>
  );
}
