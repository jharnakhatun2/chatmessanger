import React from "react";

export default function Chat() {
  return (
    <>
      <section className="h-full flex content-end">
        <div className="bg-white w-full rounded-r-2xl p-5 flex flex-wrap content-end ">
          <input
            className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-2"
            id="company"
            type="text"
            placeholder="Type here..."
          />
        </div>
      </section>
    </>
  );
}
