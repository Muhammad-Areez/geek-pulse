import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import aeroplane from "../assets/images/aeroplane.svg";
import halfmoon from "../assets/images/halfmoon.svg";
import { Col } from "react-bootstrap";
import { images } from "../assets/images";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Banner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const airplane = document.querySelector('.aeroplane-img');
    const device1 = document.querySelector('.banner-device-img1');
    const device2 = document.querySelector('.banner-device-img2');
    const moon = document.querySelector('.moon-img');

    if (airplane) {
      gsap.set(airplane, { x: 400, y: -400 });

      gsap.to(airplane, {
        scrollTrigger: {
          trigger: ".banner-section",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        x:-400,
        y: 300,
        rotation: -10,
        ease: "power1.inOut",
      });
    }

    if (device1) {
      gsap.to(device1, {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    if (device2) {
      gsap.to(device2, {
        y: -15,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.5,
      });
    }

    if (moon) {
      gsap.to(moon, {
        rotation: 360,
        duration: 60,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

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
