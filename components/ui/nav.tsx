"use client";

import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import Brand from "./brand";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="bg-accent lg:bg-accent lg:px-20 hidden md:flex">
      <nav className="container flex items-center justify-between py-2 md:py-5 lg:py-3">
        <Brand />
        <div className="flex gap-5 lg:gap-10 items-center">
          <Extra />
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
      </nav>

      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <>
      <ul className="absolute inset-x-0 bg-accent border-t-2 border-t-secondary py-5 px-20 flex flex-col items-start">
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

const Extra = () => {
  return (
    <h3 className="capitalize bg-secondary rounded-full lg:rounded-xl px-5 py-2 text-white font-inter text-lg">
      <Link href="#">Lägg till en annons</Link>
    </h3>
  );
};

const nav = ["annat", "Nyheter", "Om oss"];
