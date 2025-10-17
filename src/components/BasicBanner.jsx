import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import aeroplane from "../assets/images/aeroplane.svg";
import halfmoon from "../assets/images/halfmoon.svg";
import { Col } from "react-bootstrap";
import { images } from "../assets/images";

const BasicBanner = () => {
  return (
    <section className="basicEdition_section banner-section">
      <Swiper
        className="banner-swiper"
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide className="banner-slide slide-2">
          <div className="banner-vectors">
            {/* <img src={images.basic1} className="basic1-img"/>
            <img src={images.basic2} className="basic2-img"/>
            <img src={images.basic3} className="basic3-img"/> */}
            <img src={images.basic4} className="basic4-img"/>
            <img src={images.basic5} className="basic5-img"/>
            <img src={images.basic6} className="basic6-img"/>
            <img src={images.basic7} className="basic7-img"/>
          </div>
          <div className="context">
            <span>
                <h4 className="title">ULTRA</h4>
                <img src={images.Xicon} alt="" />
            </span>
            <h2 className="heading">Basic Editions</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BasicBanner;
