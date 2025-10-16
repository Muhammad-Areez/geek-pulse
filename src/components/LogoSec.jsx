import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

const LogoSec = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="logo-section">
      <div className="logo-container">
        <img src={images.matrix} className="matrix-img" />

        <img
          ref={logoRef}
          src={images.logo}
          alt="Logo"
          className="banner-logo"
        />
      </div>
    </section>
  );
};

export default LogoSec;
