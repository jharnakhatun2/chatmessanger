"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <Swiper
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
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
                  <h2 className="font-medium pt-2 text-xl">{item.name}</h2>
                  <h3>{item.period}</h3>
                  <h3>{item.time}</h3>
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
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    name: "SSK, Avdelning, Stad",
    period: "v12 - v15",
    time: "320-400 kr/timme",
  },
  {
    id: 2,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    name: "SSK, Avdelning, Stad",
    period: "v12 - v15",
    time: "320-400 kr/timme",
  },
  {
    id: 3,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    name: "SSK, Avdelning, Stad",
    period: "v12 - v15",
    time: "320-400 kr/timme",
  },
  {
    id: 4,
    image: "/assets/images/Skärmavbild 2023-05-28 kl. 14.16 1.png",
    name: "SSK, Avdelning, Stad",
    period: "v12 - v15",
    time: "320-400 kr/timme",
  },
];
