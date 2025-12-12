import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import aeroplane from "../assets/images/aeroplane.svg";
import { Col } from "react-bootstrap";
import { images } from "../assets/images";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import GlitchText from "./GlitchText";

const Banner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const airplane = document.querySelector(".aeroplane-img");
    const device1 = document.querySelector(".banner-device-img1");
    const device2 = document.querySelector(".banner-device-img2");
    const moon = document.querySelector(".moon-img");
    const galaxy = document.querySelector(".galaxy-img");

    /** 🌌 GALAXY **/
    if (galaxy) {
      gsap.to(galaxy, {
        keyframes: [
          { x: 30, y: -10 },
          { x: 60, y: 0 },
          { x: 30, y: 10 },
          { x: 0, y: 0 },
        ],
        duration: 12,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        force3D: true,
        transformOrigin: "center center",
      });
    }

    // /** ✈️ AEROPLANE  **/
    // if (airplane) {
    //   gsap.set(airplane, {
    //     x: 600,
    //     y: -200,
    //     opacity: 0,
    //     rotate: 20,
    //     scale: 1.4,
    //   });

    //   const flyPath = () => {
    //     const tl = gsap.timeline({
    //       repeat: -1, // infinite loop
    //       repeatDelay: 0.5,
    //     });

    //     tl.to(airplane, {
    //       opacity: 1,
    //       x: -200,
    //       y: 200,
    //       rotate: -15,
    //       ease: "power2.inOut",
    //       duration: 3,
    //     })
    //       .to(airplane, {
    //         opacity: 0,
    //         duration: 0.5,
    //       })
    //       .set(airplane, { x: 600, y: -200, rotate: 20 })
    //       .to(airplane, {
    //         opacity: 1,
    //         duration: 0.5,
    //       });

    //     return tl;
    //   };

    //   flyPath();
    // }
    /** ✈️ AEROPLANE — fly on scroll **/
    if (airplane) {
      gsap.set(airplane, {
        x: 600,
        y: -300,
        opacity: 1,
        rotate: 20,
        scale: 1,
      });

      gsap.to(airplane, {
        scrollTrigger: {
          trigger: ".banner-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        x: -200,
        y: 200,
        opacity: 1,
        rotate: -15,
        ease: "power2.inOut",
      });
    }

    /** 📱 DEVICE 1 — fall from top **/
    if (device1) {
      gsap.set(device1, { y: -200, opacity: 0, scale: 0.8 });
      gsap.to(device1, {
        scrollTrigger: {
          trigger: ".banner-section",
          start: "top center",
        },
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "bounce.out",
        duration: 1.8,
      });
    }

    /** 📱 DEVICE 2 — rise from bottom **/
    if (device2) {
      gsap.set(device2, { y: 200, opacity: 0, scale: 0.8 });
      gsap.to(device2, {
        scrollTrigger: {
          trigger: ".banner-section",
          start: "top center",
        },
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power3.out",
        duration: 1.8,
        delay: 0.3,
      });
    }

    /** 🌙 MOON — slow rotation **/
    if (moon) {
      gsap.to(moon, {
        rotation: 360,
        duration: 80,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
        force3D: true,
      });
    }
  }, []);

  return (
    <section className="banner-section">
      <Swiper
        className="banner-swiper"
        spaceBetween={0}
        slidesPerView={1}
        preloadImages={false}
        watchSlidesProgress={true}
      >
        <SwiperSlide className="banner-slide slide-1">
          <div className="banner-vectors banner-overflow">
            <motion.img
              src={images.matrix}
              className="matrix-img"
              alt="Matrix lines"
              initial={{ scale: 2 }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 1.2, 1],
                rotate: [0, 0.2, 0],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <img src={images.moon} className="moon-img" />
            <img src={images.aeroplane} className="aeroplane-img" />
            <img src={images.galaxy} className="galaxy-img" />
          </div>
          <img src={images.bannerDevice1} className="banner-device-img1" />
          <img src={images.bannerDevice2} className="banner-device-img2" />
          <Col md={6} className="mt-2">
            <div className="banner-text-div">
              <div>
                <h2>ULTRA </h2>
                <div>
                  <span>2.0</span>
                </div>
              </div>
              <h1>
                The Cosmos in your palm. Experience flavor beyond the stars.
              </h1>
            </div>
            <div className="banner-list-main">
              <ul>
                <li>
                  <div>
                    <img src={images.bannerIcon1} />
                  </div>
                  <p>Dynamic Display</p>
                </li>
                <li>
                  <div>
                    <img src={images.bannerIcon2} />
                  </div>
                  <p>Dual Core</p>
                </li>
                <li>
                  <div>
                    <img src={images.bannerIcon2} />
                  </div>
                  <p>Cosmos In Your Hands</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}></Col>
        </SwiperSlide>
        <SwiperSlide className="banner-slide slide-retro">
          <img src={images.homeRetro1} className="banner-device-img3" />
          <img src={images.homeRetro2} className="banner-device-img4" />
          <Col md={6} className="mt-2">
            <div className="banner-text-div2">
              <div>
                <h2>ULTRA </h2>
                <div className="ultra-x">
                  <span>X</span>
                </div>
              </div>
              <div className="banner-retro-text">
                <h4>Regular Mode</h4>
                <h3>
                  60X PUFFS
                </h3>
              </div>
              <div className="banner-retro-text">
                <h4>Pulse Mode</h4>
                <h3>
                  30X PUFFS
                </h3>
              </div>
            </div>
          </Col>
          <Col md={6}></Col>
        </SwiperSlide>
        <SwiperSlide className="banner-slide slide-seasonal">
          <Col md={12} className="mt-2">
            <div className="banner-text-div3">
              <h2>SEASONAL<br/>EDITION</h2>
            </div>
            <div className="banner-seasonal-devices">
              <img src={images.vpuDevice1} alt="device" />
              <img src={images.vpuDevice2} alt="device" />
              <img src={images.vpuDevice3} alt="device" />
              <img src={images.vpuDevice4} alt="device" />
            </div>
          </Col>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
