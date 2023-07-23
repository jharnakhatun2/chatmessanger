"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";

export default function Slider2() {
  return (
    <>
      <Swiper className="mySwiper">
        {userInfo.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="font-inter bg-white shadow-2xl rounded pb-4">
                <Image
                  className="w-full"
                  src={item.image}
                  width={185}
                  height={81}
                  alt=""
                />
                <div className="p-3">
                  <h2 className="font-semibold pt-2 text-xl">{item.name}</h2>
                  <h3 className="text-lg">{item.description}</h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
const userInfo = [
  {
    id: 1,
    image: "/assets/images/image 56.png",
    name: "Drömmer du om att jobba mindre",
    description: "Text Text Text Text Text Text Text Text Text Text Text Text ",
  },
  {
    id: 2,
    image: "/assets/images/image 56.png",
    name: "Drömmer du om att jobba mindre",
    description: "Text Text Text Text Text Text Text Text Text Text Text Text ",
  },
  {
    id: 3,
    image: "/assets/images/image 56.png",
    name: "Drömmer du om att jobba mindre",
    description: "Text Text Text Text Text Text Text Text Text Text Text Text ",
  },
  {
    id: 4,
    image: "/assets/images/image 56.png",
    name: "Drömmer du om att jobba mindre",
    description: "Text Text Text Text Text Text Text Text Text Text Text Text ",
  },
];
