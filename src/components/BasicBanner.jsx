import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { images } from "../assets/images";
import ShinyText from "./ShinyText";

const BasicBanner = () => {
  const jumpInLeft = {
    hidden: { opacity: 0, x: -200, rotateY: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.8, ease: animatedEase, type: "spring" },
    },
  };

  const jumpInRight = {
    hidden: { opacity: 0, x: 200, rotateY: -60, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.8, ease: animatedEase, type: "spring" },
    },
  };

  const jumpInCenter = {
    hidden: { opacity: 0, y: 150, scale: 0.7, rotateX: 40 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: animatedEase, type: "spring" },
    },
  };

  const floatVariant = {
    hidden: { opacity: 0, y: 40, rotate: 8 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="basicEdition_section banner-section">
      <Swiper className="banner-swiper" spaceBetween={50} slidesPerView={1}>
        <SwiperSlide className="banner-slide slide-2">
          <div className="banner-vectors">
            {/* 3D Jump Animations */}
            <motion.img
              src={images.basic1}
              className="basic1-img"
              variants={jumpInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, -2, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />

            <motion.img
              src={images.basic2}
              className="basic2-img"
              variants={jumpInCenter}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 1.5, -1.5, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />

            <motion.img
              src={images.basic3}
              className="basic3-img"
              variants={jumpInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, -2, 2, 0],
                transition: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />

            {/* Normal fade + float for remaining */}
            <motion.img
              src={images.basic4}
              className="basic4-img"
              variants={floatVariant}
              initial="hidden"
              whileInView="visible"
              custom={0.4}
              viewport={{ once: true }}
            />
            <motion.img
              src={images.basic7}
              className="basic5-img"
              variants={floatVariant}
              initial="hidden"
              whileInView="visible"
              custom={0.5}
              viewport={{ once: true }}
            />
            <motion.img
              src={images.basic6}
              className="basic6-img"
              variants={floatVariant}
              initial="hidden"
              whileInView="visible"
              custom={0.6}
              viewport={{ once: true }}
            />
            <motion.img
              src={images.basic5}
              className="basic7-img"
              variants={floatVariant}
              initial="hidden"
              whileInView="visible"
              custom={0.7}
              viewport={{ once: true }}
            />
          </div>

          <div className="context">
            <span className="d_flex">
              <h4 className="title">ULTRA</h4>
              <img src={images.Xicon} alt="" />
            </span>
            <ShinyText
              text="Basic Editions"
              disabled={false}
              speed={3}
              className="heading custom-class"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BasicBanner;

// Helper easing curve
const animatedEase = [0.25, 0.1, 0.25, 1];
