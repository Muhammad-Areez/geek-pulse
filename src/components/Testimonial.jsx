import React from "react";
import { images } from "../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
  const reviews = [
    {
      name: "Sarah M.",
      review:
        "“Switched from smoking to vaping — no more coughing and love the flavors!”",
    },
    {
      name: "Alex K.",
      review:
        "I like vaping mostly for the convenience. No smell on clothes, no ash, and it’s easy to carry around. I still crave a real cigarette once in a while, but overall vaping has helped me reduce smoking a lot.",
    },
    {
      name: "James L.",
      review:
        "Vaping made social situations so much easier. No more people complaining about smoke smell or asking me to step outside. It’s cleaner and feels modern.",
    },
    {
      name: "Emily R.",
      review:
        "I like vaping sometimes just for the flavor and relaxation, not for nicotine. It’s a nice stress-reliever",
    },
    {
      name: "Daniel S.",
      review:
        "Two years vape-only and never looked back. Way cheaper and smells better.”",
    },
    {
      name: "Olivia P.",
      review:
        "No smoke smell, no ash — just clean vapor. Love it in social settings.",
    },
  ];

  return (
    <div className="testimonial-section relative">
      <div className="bulletHeading">
        <h4 className="title">Testimonials</h4>
      </div>

      <div className="d_flexBetween">
        <h2 className="heading">Reviews From Customers</h2>
        <button className="cta">View More</button>
      </div>

      <div className="swiperWrapper relative">
        {/* Soft fade on both sides */}
        <div className="fadeOverlay fadeLeft" />
        <div className="fadeOverlay fadeRight" />

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]}
          className="testimonialSwiper"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <div className="reviewBox">
                <div className="rattings d_flex">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={images.star} alt="star" />
                  ))}
                </div>
                <div className="d_flex name">
                  <p>{item.name}</p>
                  <img src={images.verified} alt="verified" />
                </div>
                <p className="review">"{item.review}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
