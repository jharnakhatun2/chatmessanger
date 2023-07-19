"use client";

import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import Brand from "./brand";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="bg-white lg:bg-accent">
      <nav className="container flex items-center justify-between px-3 py-2 md:px-5 md:py-5 lg:py-3 lg:px-20">
        {!isMenuOpen ? (
          <AlignJustify
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className="cursor-pointer lg:hidden text-background bg-secondary rounded-full p-1"
          />
        ) : (
          <X
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className="cursor-pointer lg:hidden text-secondary"
          />
        )}
        <Brand />
        <NavContent />
        {!isMenuOpen ? (
          <AlignJustify
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className="cursor-pointer hidden  text-background bg-primary"
          />
        ) : (
          <X
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className="cursor-pointer hidden  text-primary"
          />
        )}
      </nav>
      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContent = () => {
  return (
    <>
      <div className="flex flex-end gap-5">
        <ul className="flex items-center text-lg max-lg:hidden">
          {nav.map((_) => (
            <li key={_}>
              <h2 className="text-md px-5">
                {/* @ts-ignore */}
                <Link as={_ === "annat" && "/"} href={_}>
                  {_}
                </Link>
              </h2>
            </li>
          ))}
        </ul>
        <Extra />
      </div>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <>
      <ul className="absolute inset-x-0 bg-background p-8 flex flex-col items-start lg:hidden">
        {nav.map((_) => (
          <li onClick={() => setIsMenuOpen(false)} key={_}>
            <h2 className="">
              <Link href={_}>{_}</Link>
            </h2>
          </li>
        ))}
      </ul>
      <Extra />
    </>
  );
};

const Extra = () => {
  return (
    <h3 className="capitalize flex items-center gap-[12%] bg-secondary rounded-xl lg:rounded-full px-5 py-2 text-white font-inter">
      <Link href="/landing">Logga in</Link>
    </h3>
  );
};

const nav = ["annat", "Nyheter", "Om oss"];
