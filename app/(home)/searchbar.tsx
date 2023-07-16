import RadixSelect from "./radix-select";

export default function Searchbar() {
  return (
    <div className="w-full block lg:flex gap-3">
      <RadixSelect />
      <RadixSelect />
      <button className=" bg-secondary px-20 rounded">Sök</button>
    </div>
  );
}
export const jobSelect = ["one", "two", "three", "four"];
export const serviceSelect = ["five", "six", "seven", "eight"];
