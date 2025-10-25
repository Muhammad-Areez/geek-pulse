import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
import { images } from "../assets/images";

const SmoothieBanner = () => {
  const slideRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4, ease: "power3.out" });

      tl.from(".slide-4 .heading", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      tl.from(
        [".smootieBg1", ".smootieBg2", ".smootieBg6"],
        {
          x: -200,
          opacity: 0,
          rotate: -10,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.8"
      );

      tl.from(
        [".smootieBg3", ".smootieBg4", ".smootieBg5"],
        {
          x: 200,
          opacity: 0,
          rotate: 10,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=1"
      );

      tl.from(
        [
          ".smoothiedevice1",
          ".smoothiedevice2",
          ".smoothiedevice3",
          ".smoothiedevice4",
        ],
        {
          scale: 1.6,
          opacity: 0,
          y: 100,
          duration: 1.4,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, slideRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="basicEdition_section banner-section" ref={slideRef}>
      <Swiper className="banner-swiper" spaceBetween={50} slidesPerView={1}>
        <SwiperSlide className=" slide-4">
          <div className="context">
            <div className="d_flex">
              <h4 className="title">Ultra</h4>
              <img src={images.Xicon} alt="X icon" />
            </div>
          </div>

          <h2 className="heading">Smoothie Edition</h2>

          {/* Backgrounds */}
          <img src={images.smootieBg1} alt="" className="smootieBg1" />
          <img src={images.smootieBg2} alt="" className="smootieBg2" />
          <img src={images.smootieBg3} alt="" className="smootieBg3" />
          <img src={images.smootieBg4} alt="" className="smootieBg4" />
          <img src={images.smootieBg5} alt="" className="smootieBg5" />
          <img src={images.smootieBg7} alt="" className="smootieBg6" />

          {/* Devices */}
          <img
            src={images.smoothieDevicesStage1}
            alt=""
            className="smoothiedevice1"
          />
          <img
            src={images.smoothieDevicesStage2}
            alt=""
            className="smoothiedevice2"
          />
          <img
            src={images.smoothieDevicesStage3}
            alt=""
            className="smoothiedevice3"
          />
          <img
            src={images.smoothieDevicesStage4}
            alt=""
            className="smoothiedevice4"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SmoothieBanner;
