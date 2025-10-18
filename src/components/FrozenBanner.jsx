import React from "react";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { images } from "../assets/images";
const FrozenBanner = () => {
  return (
    <section className="basicEdition_section banner-section">
      <Swiper className="banner-swiper" spaceBetween={50} slidesPerView={1}>
        <SwiperSlide className="banner-slide slide-3">
          <Row>
            <Col lg={6} md={6}>
              <img src={images.frozenLogo} alt="" className="frozenLogo" />
            </Col>
            <Col lg={6} md={6}>
              <img src={images.frozenImg} alt="" className="frozenImg" />
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FrozenBanner;
