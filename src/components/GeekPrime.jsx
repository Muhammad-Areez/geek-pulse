import React from "react";

import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { images } from "../assets/images";

const GeekPrime = () => {
  const slideUpVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="prime_section">
      {/* <Swiper
        className="banner-swiper"
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      > */}
      <Row className="primeBox">
        <Col lg={6} md={8} sm={9} >
          <div className="banner-text-div">
            <div>
              <h2>ULTRA </h2>
              <div>
                <span>2.0</span>
              </div>
            </div>
            <h1>The Cosmos In Your Palm</h1>
            <p className="para">
              Enter the cosmos of flavor with Ultra 2.0. A fusion of technology,
              taste, and celestial design. Every puff is a journey through the
              stars.
            </p>
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
                  <img src={images.bannerIcon3} />
                </div>
                <p>Dual Mesh Coil</p>
              </li>
              <li>
                <div>
                  <img src={images.bannerIcon4} />
                </div>
                <p>Cosmos Ui</p>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={6} md={4} sm={3}>
          <motion.img
            src={images.primeImage2}
            className="banner-device-img1"
            variants={slideUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.img
            src={images.primeImage1}
            className="banner-device-img2"
            variants={slideUpVariant}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
          />
        </Col>
      </Row>
    </section>
  );
};

export default GeekPrime;
