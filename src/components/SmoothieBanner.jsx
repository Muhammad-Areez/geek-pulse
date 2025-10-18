import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { images } from "../assets/images";
const SmoothieBanner = () => {
  return (
    <section className="basicEdition_section banner-section">
      <Swiper className="banner-swiper" spaceBetween={50} slidesPerView={1}>
        <SwiperSlide className="banner-slide slide-4">
          <div className="context">
            <div className="d_flex">
              <h4 className="title">Ultra</h4>
              <img src={images.Xicon} alt="X icon" />
            </div>
          </div>
          <h2 className="heading">Smoothie Edition</h2>
          <img src={images.smootieBg1} alt="" className="smootieBg1" />
          <img src={images.smootieBg2} alt="" className="smootieBg2" />
          <img src={images.smootieBg3} alt="" className="smootieBg3" />
          <img src={images.smootieBg4} alt="" className="smootieBg4" />
          <img src={images.smootieBg5} alt="" className="smootieBg5" />
          <img src={images.smootieBg6} alt="" className="smootieBg6" />
          <img
            src={images.smoothiedevice1}
            alt=""
            className="smoothiedevice1"
          />
          <img
            src={images.smoothiedevice2}
            alt=""
            className="smoothiedevice2"
          />
          <img
            src={images.smoothiedevice3}
            alt=""
            className="smoothiedevice3"
          />
          <img
            src={images.smoothiedevice4}
            alt=""
            className="smoothiedevice4"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SmoothieBanner;
