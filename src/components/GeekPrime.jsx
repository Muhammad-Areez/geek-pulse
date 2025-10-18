import React from "react";

import { Col } from "react-bootstrap";
import { images } from "../assets/images";

const GeekPrime = () => {
  return (
    <section className="prime_section">
      {/* <Swiper
        className="banner-swiper"
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      > */}
      <div className="primeBox">
        <img src={images.primeImage2} className="banner-device-img1" />
        <img src={images.primeImage1} className="banner-device-img2" />
        <Col md={6}>
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
        <Col md={6}></Col>
      </div>
    </section>
  );
};

export default GeekPrime;
