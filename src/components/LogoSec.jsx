import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { images } from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

const LogoSec = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { opacity: 0, y: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: "bottom+=50% top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        logoRef.current,
        { scale: 1, opacity: 1 },
        { scale: 5, opacity: 0, ease: "power2.out", duration:2 }
      );

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power2.out"}
      );

      tl.to(
        textRef.current.querySelectorAll("span"),
        { color: "white", stagger: 0.05, ease: "none" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const textContent =
    "Geek Pulse is redefining disposables, merging futuristic technology, premium flavors, and sleek design to ignite the next era of vaping innovation. Driven by curiosity and crafted for those who crave more, our mission is to take vaping beyond the ordinary.";

  const words = textContent.split(" ").map((word, index) => (
    <span key={index}>{word} </span>
  ));

  return (
    <section ref={sectionRef} className="logo-section">
      <div className="logo-container">
      <motion.img
          src={images.matrix}
          className="matrix-img"
          alt="Matrix lines"
          initial={{ scale: 1.2 }}
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        />
        <img ref={logoRef} src={images.logo} alt="Logo" className="banner-logo" />
        <h3 ref={textRef}>{words}</h3>
      </div>
    </section>
  );
};

export default LogoSec;