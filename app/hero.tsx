import Image from "next/image";

export default function Hero() {
  return (
    <div className="container ">
      <div className="items-center lg:flex flex-row-reverse">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            className="w-full h-full"
            src="/assets/images/image 40.png"
            width={923}
            height={899}
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-16">
          <div className="flex ">
            <h1 className="text-3xl font-semibold text-[#53CCD1] dark:text-white lg:text-[4.5rem] leading-none">
              Alla
              <span className="text-[#404040]"> konsultuppdrag samlade </span>
              på en sida
            </h1>

            {/* <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />
              <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Subscribe
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
