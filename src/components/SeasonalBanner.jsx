import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { images } from "../assets/images";

const SeasonalBanner = () => {
  // Variants for entrance animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { y: 150, scale: 0.8, rotateX: 80 },
    visible: {
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 1.3, ease: "easeOut" },
    },
  };

  const bg1Variants = {
    hidden: { x: 300, y: 100, rotateY: 25 },
    visible: {
      x: 0,
      y: 0,
      rotateY: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const bg2Variants = {
    hidden: { x: -300, y: 80, rotateY: -25 },
    visible: {
      x: 0,
      y: 0,
      rotateY: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const boxVariants = {
    hidden: { y: 200, rotate: -8, scale: 0.9 },
    visible: {
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const deviceVariants = {
    hidden: { y: 300, rotate: 15, scale: 0.8 },
    visible: {
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  // Floating loop motion
  const floatTransition = {
    y: {
      duration: 3,
      yoyo: Infinity,
      ease: "easeInOut",
    },
    rotate: {
      duration: 3,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="basicEdition_section banner-section">
      <Swiper className="banner-swiper" spaceBetween={50} slidesPerView={1}>
        <SwiperSlide className="banner-slide slide-5">
          <div className="water-animation-layer"></div>

          <motion.div
            className="banner-motion-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <motion.h2 className="heading" variants={headingVariants}>
              Seasonal Edition
            </motion.h2>

            {/* Background 1 */}
            <motion.img
              src={images.seasonalBg1}
              alt=""
              className="seasonalBg1"
              variants={bg1Variants}
              animate={{
                y: [0, 15, 0],
                rotate: [0, 1.5, 0],
                transition: floatTransition,
              }}
            />

            {/* Background 2 */}
            <motion.img
              src={images.seasonalBg2}
              alt=""
              className="seasonalBg2"
              variants={bg2Variants}
              animate={{
                y: [0, -15, 0],
                rotate: [0, -1.5, 0],
                transition: { ...floatTransition, duration: 3.5 },
              }}
            />

            {/* Box */}
            <motion.img
              src={images.seasonalBox1}
              alt=""
              className="seasonalBox1"
              variants={boxVariants}
              animate={{
                y: [0, 10, 0],
                rotate: [0, -1, 0],
                transition: { ...floatTransition, duration: 4 },
              }}
            />

            {/* Device */}
            <motion.img
              src={images.seasonalDevice1}
              alt=""
              className="seasonalBannerDevice1"
              variants={deviceVariants}
              animate={{
                y: [0, 12, 0],
                rotate: [0, 1.2, 0],
                transition: { ...floatTransition, duration: 3.2 },
              }}
            />
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SeasonalBanner;
