import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { images } from "../assets/images";

const FrozenBanner = () => {
  const [isXS, setIsXS] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 576px)");

    const handleMediaChange = (e) => {
      setIsXS(e.matches);
    };

    // Initial check
    setIsXS(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

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
        <SwiperSlide className="slide-3">
          {/* ❄️ Left Logo Animation */}
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

          {/* 🧊 Right Product Animation */}
          <div className="position-relative">
            {/* Box */}
            <motion.img
              src={images.frozenImg}
              alt="Frozen Box"
              className="frozenBox"
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: 1,
                scale: 1.5,
                y: isXS ? 100 : 200, // ✅ Now correctly 100 at ≤576px
                x: 150,
              }}
              transition={{
                duration: 0.8,
                ease: [0.45, 0, 0.55, 1],
              }}
            />
            {/* ❄️ Text Animation (Bottom Left Appearance) */}
          </div>
          <motion.div
            className="frozenFeatures"
            initial={{ opacity: 0, x: -80, y: 80 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <div className="frozenBanner_text">
              <p className="title">Regular Mode</p>
              <p className="text">40k puffs</p>
            </div>
            <div className="frozenBanner_text">
              <p className="title">Pulse Mode</p>
              <p className="text">30k puffs</p>
            </div>
          </motion.div>
          <motion.img
            src={images.frozenImg3}
            alt="Frozen Device"
            className="frozenDevice3"
            initial={{ opacity: 0, x: 150, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 100, y: 50, scale: 1 }}
            transition={{
              delay: 1.2,
              duration: 1.3,
              type: "spring",
              stiffness: 90,
              damping: 18,
            }}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FrozenBanner;
