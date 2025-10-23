import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { images } from "../assets/images";

const SeasonalBanner = () => {
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

  const slides = [
    {
      id: 1,
      boxImg: images.seasonalBox1,
      deviceImg: images.seasonalDevice1,
    },
    {
      id: 2,
      boxImg: images.seasonalBox2,
      deviceImg: images.seasonalDevice2,
    },
    {
      id: 3,
      boxImg: images.seasonalBox3,
      deviceImg: images.seasonalDevice3,
    },
    {
      id: 4,
      boxImg: images.seasonalBox4,
      deviceImg: images.seasonalDevice4,
    },
  ];

  const floatTransition = {
    y: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
    rotate: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "reverse",
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
            {/* Static heading */}
            <motion.h2 className="heading" variants={headingVariants}>
              Seasonal Edition
            </motion.h2>

            {/* Background 1 */}
            <motion.img
              src={images.seasonalBg1}
              alt=""
              className="seasonalBg1"
              initial={{ x: 150, opacity: 0, scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              animate={{
                y: [0, 10, 0, -10, 0],
                rotate: [0, 1.2, 0, -1.2, 0],
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            <motion.img
              src={images.seasonalBg2}
              alt=""
              className="seasonalBg2"
              initial={{ x: -150, opacity: 0, scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              animate={{
                y: [0, -10, 0, 10, 0],
                rotate: [0, -1.2, 0, 1.2, 0],
              }}
              transition={{
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            <Swiper
              className="product-swiper"
              modules={[ Autoplay]}
              navigation
              spaceBetween={40}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 2500, 
                disableOnInteraction: false,
              }}
              speed={800} 
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="device-box-wrapper">
                    <motion.img
                      src={slide.boxImg}
                      alt=""
                      className="seasonalBox1"
                      initial={{ opacity: 0, x: 100, scale: 0.8 }}
                      animate={{ opacity: 1, x: 60, scale: 1.4 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />

                    <motion.img
                      src={slide.deviceImg}
                      alt=""
                      className="seasonalBannerDevice1"
                      initial={{ opacity: 0, x: -100, scale: 0.8 }}
                      animate={{ opacity: 1, x: -50, y: 30, scale: 0.9 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 0.2,
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SeasonalBanner;
