import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { images } from "../assets/images";
const SeasonalBanner = () => {
  return (
    <section className="basicEdition_section banner-section">
      <Swiper className="banner-swiper" spaceBetween={50} slidesPerView={1}>
        <SwiperSlide className="banner-slide slide-5">
          <h2 className="heading">Seasonal Edition</h2>
          <img src={images.seasonalBg1} alt="" className="seasonalBg1" />
          <img src={images.seasonalBg2} alt="" className="seasonalBg2" />
          <img
            src={images.seasonalBox1}
            alt=""
            className="seasonalBox1"
          />
          <img
            src={images.seasonalDevice1}
            alt=""
            className="seasonalBannerDevice1"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SeasonalBanner;
