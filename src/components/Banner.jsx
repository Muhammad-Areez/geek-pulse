import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import aeroplane from "../assets/images/aeroplane.svg";
import halfmoon from "../assets/images/halfmoon.svg";
import { Col } from "react-bootstrap";
import { images } from "../assets/images";

const Banner = () => {
  return (
    <section className="banner-section">
      <Swiper
        className="banner-swiper"
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="banner-slide slide-1">
          <div className="banner-vectors banner-overflow">
            <img src={images.matrix} className="matrix-img"/>
            <img src={images.moon} className="moon-img"/>
            <img src={images.aeroplane} className="aeroplane-img"/>
            <img src={images.galaxy} className="galaxy-img"/>
          </div>
          <img src={images.bannerDevice1} className="banner-device-img1"/>
          <img src={images.bannerDevice2} className="banner-device-img2"/>
          <Col md={6}>
            <div className="banner-text-div">
              <div>
                <h2>ULTRA </h2>
                <div><span>2.0</span></div>
              </div>
              <h1>The Cosmos in your palm. Experience flavor beyond the stars.</h1>
            </div>
            <div className="banner-list-main">
              <ul>
                <li>
                  <div>
                    <img src={images.bannerIcon1}/>
                  </div>
                  <p>Dynamic Display</p>
                </li>
                <li>
                  <div>
                    <img src={images.bannerIcon2}/>
                  </div>
                  <p>Dual Core</p>
                </li>
                <li>
                  <div>
                    <img src={images.bannerIcon2}/>
                  </div>
                  <p>Cosmos In Your Hands</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}></Col>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};

export default Banner;
