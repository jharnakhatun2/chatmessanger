import React from "react";

export default function RadixSelect() {
  return (
    <div className="relative w-full ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        className="bi bi-search absolute top-0 left-0 my-4 mx-3 pointer-events-none"
        viewBox="0 0 16 16"
      >
        {" "}
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
      </svg>
      <svg
        className="w-4 h-4 absolute top-0 right-0 pointer-events-none p-[3px] m-3 border rounded-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="#648299"
          fillRule="nonzero"
        />
      </svg>
      <select className="rounded-xl text-center text-foreground py-3 px-10 hover:border-none focus:outline-none appearance-none bg-[#f4f2f2] w-full">
        <option>Choose a color</option>
        <option>Red</option>
        <option>Blue</option>
        <option>Yellow</option>
        <option>Black</option>
        <option>Orange</option>
        <option>Purple</option>
        <option>Gray</option>
        <option>White</option>
      </select>
    </div>
  );
}
