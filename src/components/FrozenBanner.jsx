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
          <Row>
            {/* ❄️ Left Logo Animation */}
            <Col lg={6} md={6}>
              <motion.img
                src={images.frozenLogo}
                alt="Frozen Logo"
                className="frozenLogo"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  type: "spring",
                  stiffness: 90,
                }}
              />
            </Col>

            {/* 🧊 Right Product Animation */}
            <Col lg={6} md={6} className="position-relative frozenWrapper">
              {/* Box */}
              <motion.img
                src={images.frozenImg}
                alt="Frozen Box"
                className="frozenBox"
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: -300, x: 300 }}
                transition={{
                  duration: 0.8,
                  ease: [0.45, 0, 0.55, 1],
                }}
              />

              {/* Hat - drop from top */}
              <motion.img
                src={images.frozenImg2}
                alt="Frozen Hat"
                className="frozenHat"
                initial={{
                  opacity: 0,
                  y: -300, // start higher
                  rotate: -20,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  y: -460,
                  x: -110,
                  rotate: 15,
                  scale: 0.5,
                }}
                transition={{
                  delay: 1.5,
                  duration: 2,
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                }}
              />

              {/* Device - slides in from right */}
              <motion.img
                src={images.frozenImg3}
                alt="Frozen Device"
                className="frozenDevice3"
                initial={{ opacity: 0, x: 180, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, x: 130, y: 130, scale: 0.8 }}
                transition={{
                  delay: 1.3,
                  duration: 1.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 16,
                }}
              />
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FrozenBanner;
