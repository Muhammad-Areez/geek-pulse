import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const products = [
    { img: retro, path: "/retro-edition" },
    { img: frozen, path: "/frozen-edition" },
    { img: seasonal, path: "/seasonal-edition" },
    { img: basic, path: "/basic-edition" },
    { img: cosmo, path: "/cosmos-edition" },
    { img: smoothie, path: "/smoothie-edition" },
  ];

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
        loop={true}
        speed={1000}
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <div
              onClick={() => navigate(product.path)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={product.img}
                alt={`Product ${i + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurProducts;
