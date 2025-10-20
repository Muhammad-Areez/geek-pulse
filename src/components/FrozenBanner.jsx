import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { images } from "../assets/images";

const FrozenBanner = () => {
  useEffect(() => {
    const snowContainer = document.querySelector(".snow-container");
    for (let i = 0; i < 60; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = Math.random() * 100 + "%";
      snowflake.style.animationDuration = 5 + Math.random() * 10 + "s";
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = 10 + Math.random() * 16 + "px";
      snowContainer.appendChild(snowflake);
    }
  }, []);

  return (
    <section className="basicEdition_section banner-section">
      <div className="snow-container"></div>

      <Swiper className="banner-swiper" spaceBetween={50} slidesPerView={1}>
        <SwiperSlide className="banner-slide slide-3">
          <Row className="align-items-center">
            {/* ❄️ Logo Animation */}
            <Col lg={6} md={6}>
              <motion.img
                src={images.frozenLogo}
                alt=""
                className="frozenLogo"
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </Col>

            {/* 🧊 Frozen Image Animation (Slide In from Right) */}
            <Col lg={6} md={6}>
              <motion.img
                src={images.frozenImg}
                alt=""
                className="frozenImg"
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FrozenBanner;
