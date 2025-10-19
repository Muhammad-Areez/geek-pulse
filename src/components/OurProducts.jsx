import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import retro from "../assets/images/Retro-editions.png";
import frozen from "../assets/images/Frozen-editions.png";
import seasonal from "../assets/images/Seasonal-editions.png";
import basic from "../assets/images/Basic-editions.png";
import cosmo from "../assets/images/Cosmo-editions.png";
import smoothie from "../assets/images/Smoothie-editions.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const OurProducts = ({
  showHeading = true,
  headingText = "Our Products",
  addBg = false,
  color
}) => {
  return (
    <div className= {`ourproducts ${addBg ? "with-bg" : ""}`}>
      {showHeading && <h2 className="heading my-3" style={{color: color ? color : ''}}>{headingText}</h2>}

      <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1200: { slidesPerView: 2, spaceBetween: 20 },
        }}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {[retro, frozen, seasonal, basic, cosmo, smoothie].map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`Product ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurProducts;
