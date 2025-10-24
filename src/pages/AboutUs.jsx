import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/Warning";
import Header from "../components/Header";
import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";
import LogoSec from "../components/LogoSec";
import ContentSec from "../components/ContentSec";
import GeekPrime from "../components/GeekPrime";
import Testimonial from "../components/Testimonial";
import Blogs from "../components/Blogs";
import { Footer } from "../components/Footer";
import AboutCard from "../components/AboutCard";
import { images } from "../assets/images";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { opacity: 0, y: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom+=250% top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        logoRef.current,
        { scale: 1, opacity: 1 },
        { scale: 5, opacity: 0, ease: "power2.out", duration: 2 }
      );

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power2.out" }
      );

      tl.to(textRef.current.querySelectorAll("span"), {
        color: "white",
        stagger: 0.05,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const textContent =
    "Geek Pulse is redefining disposables, merging futuristic technology, premium flavors, and sleek design to ignite the next era of vaping innovation. Driven by curiosity and crafted for those who crave more, our mission is to take vaping beyond the ordinary.";

  const words = textContent
    .split(" ")
    .map((word, index) => <span key={index}>{word} </span>);
  return (
    <>
      <section className="aboutUs_section">
        <section ref={sectionRef} className="position-relative">
          <Warning borderRadius={"0px"} />
          <Header />
          {/* <LogoSec/> */}
          <section className="logo-section">
            <div className="logo-container">
              <motion.img
                src={images.matrix}
                className="matrix-img"
                alt="Matrix lines"
                initial={{ scale: 1.2 }}
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
              <img
                ref={logoRef}
                src={images.logo}
                alt="Logo"
                className="banner-logo"
              />
              <h3 ref={textRef}>{words}</h3>
            </div>
          </section>
        </section>

        <section className="about_section2">
          <h2 className="heading">
            FROM TECHNOLOGY DEVELOPMENT TO HEALTH APPLICATIONS
          </h2>
          <AboutCard />
        </section>
        <section className="registered_section">
          <div className="d_flex">
            <img src={images.aboutLogo1} alt="" className="aboutLogo" />
            <img src={images.aboutLogo2} alt="" className="aboutLogo" />
            <img src={images.aboutLogo3} alt="" className="aboutLogo" />
            <img src={images.aboutLogo4} alt="" className="aboutLogo" />
            <img src={images.aboutLogo5} alt="" className="aboutLogo" />
          </div>
        </section>
        <section className="ourProducts_section">
          <div className="position-relative">
            <OurProducts addBg={false} headingText="Our Products" />
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default AboutUs;
