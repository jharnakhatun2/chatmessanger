"use client";

import { AlignJustify, User, X } from "lucide-react";
import { useState } from "react";
import Brand from "./brand";
import Link from "next/link";

export default function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="bg-white md:hidden">
      <nav className="container flex items-center justify-between px-3 py-2 md:px-5 md:py-5 lg:py-3 lg:px-20">
        {!isMenuOpen ? (
          <AlignJustify
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className="cursor-pointer md:hidden text-background bg-secondary rounded-full p-1"
          />
        ) : (
          <X
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className="cursor-pointer md:hidden text-secondary"
          />
        )}
        <div>
          <Link href="/" className="text-3xl  md:text-5xl text-secondary">
            Konsulta
          </Link>
        </div>
        <User className="w-[35px] h-[35px] cursor-pointer md:hidden text-background bg-secondary rounded-full p-1" />
      </nav>
      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <>
      <ul className="absolute inset-x-0 bg-white border-t-2 border-accent px-6 py-3 flex flex-col items-start md:hidden">
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
