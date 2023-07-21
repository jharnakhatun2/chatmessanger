"use client";

import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Brand from "./brand";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="bg-white rounded-2xl relative hidden lg:flex">
      <nav className=" container flex items-center justify-between px-3 py-2 md:px-5 md:py-2 ">
        <Brand />
        {!isMenuOpen ? (
          <AlignJustify
            onClick={() => setIsMenuOpen(true)}
            size={30}
            className="cursor-pointer text-primary"
          />
        ) : (
          <X
            onClick={() => setIsMenuOpen(false)}
            size={30}
            className="cursor-pointer  text-primary"
          />
        )}
      </nav>
      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <>
      <ul className="absolute top-16 inset-x-0 bg-background px-10 py-3 flex flex-col items-start border-t-[1px] border-accent">
        {nav.map((_) => (
          <li onClick={() => setIsMenuOpen(false)} key={_}>
            <h2 className="">
              <Link href={_}>{_}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
};

const nav = ["annat", "Nyheter", "Om oss"];
