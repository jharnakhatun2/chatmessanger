"use client";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative container flex justify-between bg-background py-5 rounded-2xl">
      <div className="flex">
        <div className="flex gap-5 items-center">
          <Image
            className=""
            src="/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png"
            width={77}
            height={77}
            alt=""
          />
          <div>
            <h4 className="font-semibold text-2xl">Sara Ekblom</h4>
            <h4>Läkarleasing AB</h4>
          </div>
        </div>
      </div>
      <div className=" flex items-center z-40">
        {!isMenuOpen ? (
          <AlignJustify
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className="cursor-pointer text-background bg-primary rounded-full p-1"
          />
        ) : (
          <X
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className="cursor-pointer text-primary"
          />
        )}
      </div>
      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
}
const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <>
      <ul className="absolute inset-x-0 bg-background p-3 flex flex-col items-start border-t-[1px] my-20 pl-16 border-accent">
        {nav.map((_) => (
          <li onClick={() => setIsMenuOpen(false)} key={_}>
            <h2 className="text-xl">
              <Link href={_}>{_}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
};
const nav = ["annat", "Nyheter", "Om oss"];
