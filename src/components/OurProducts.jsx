import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import retro from "../assets/images/Retro-editions.png";
import frozen from "../assets/images/Frozen-editions.png";
import seasonal from "../assets/images/Seasonal-editions.png";
import basic from "../assets/images/Basic-editions.png";
import cosmo from "../assets/images/Cosmo-editions.png";
import smoothie from "../assets/images/Smoothie-editions.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
const OurProducts = () => {
  return (
    <Swiper
      className="mySwiper"
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src={retro} alt="Retro Editions" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={frozen} alt="Frozen Editions" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={seasonal} alt="Seasonal Editions" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={basic} alt="Basic Editions" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={cosmo} alt="Cosmo Editions" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={smoothie} alt="Smoothie Editions" />
      </SwiperSlide>
    </Swiper>
  );
};

export default OurProducts;
