import Link from "next/link";
import RadixSelect from "./radix-select";

export default function Searchbar() {
  return (
    <div className="bg-white p-3 grid grid-cols-1 lg:grid-cols-3 gap-3 rounded-2xl lg:w-[130%] relative items-center">
      <RadixSelect />
      <RadixSelect />
      <Link href="/listings">
        <div className="w-full bg-secondary px-24 py-3 rounded-xl text-center">
          Sök
        </div>
      </Link>
    </div>
  );
}
export const jobSelect = ["one", "two", "three", "four"];
export const serviceSelect = ["five", "six", "seven", "eight"];
