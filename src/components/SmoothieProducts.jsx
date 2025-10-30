import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { images } from "../assets/images";
import ScrollReveal from "./ScrollReveal";

const SmoothieProducts = () => {
  const isClient = typeof window !== "undefined";
  const [isMobile, setIsMobile] = useState(isClient ? window.innerWidth <= 768 : false);

  useEffect(() => {
    if (!isClient) return;
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isClient]);

  const [activeProduct, setActiveProduct] = useState(null);

  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      setActiveProduct(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "honey dew blossom",
      deviceImg: images.smoothiedevice1,
      fruiteImg: images.fruite1,
    },
    {
      id: 2,
      name: "Berry Blossom",
      deviceImg: images.smoothiedevice2,
      fruiteImg: images.fruite2,
    },
    {
      id: 3,
      name: "Bloom berry breeze",
      deviceImg: images.smoothiedevice3,
      fruiteImg: images.fruite3,
    },
    {
      id: 4,
      name: "peach heat wave",
      deviceImg: images.smoothiedevice4,
      fruiteImg: images.fruite4,
    },
  ];

  const fruitVariants = {
    initial: {
      opacity: 0,
      scale: 0.7,
      y: 30,
      filter: "blur(10px)",
    },
    hover: {
      opacity: 1,
      scale: 1.05,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const deviceVariants = {
    initial: {
      rotate: 0,
      scale: 1,
      y: 0,
      zIndex: 2,
      filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.2))",
    },
    hover: {
      rotate: 12,
      scale: 0.9,
      y: -10,
      filter: "drop-shadow(0 20px 25px rgba(255,182,193,0.6))",
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };

  return (
    <div className="smoothieBg py-5" ref={containerRef}>
      <motion.img
        src={images.bgFruite1}
        alt=""
        className="bgFruite1"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.img
        src={images.bgFruite2}
        alt=""
        className="bgFruite2"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.img
        src={images.smootieBg5}
        alt=""
        className="bgFruite3"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.img
        src={images.smootieBg4}
        alt=""
        className="smootieBg4"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.img
        src={images.smootieBg5}
        alt=""
        className="smootieBg5"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.img
        src={images.smootieBg7}
        alt=""
        className="smootieBg6"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <Container>
        <Row className="justify-content-center p-2">
          {products.map((product, index) => {
            const isActive = activeProduct === product.id;
            return (
              <Col key={product.id} lg={5} md={6} sm={6} className="mb-5">
                <motion.div
                  className={`smoothie-product-card text-center mb-3 smoothie-card-${
                    index + 1
                  } ${isActive ? "active" : ""}`}
                  whileHover={!isMobile ? "hover" : undefined}
                  animate={isActive ? "hover" : "initial"}
                  initial="initial"
                  transition={{ duration: 0.3, ease: "easeOut", type: "tween" }}
                  onClick={(e) => {
                    if (activeProduct !== product.id) {
                      setActiveProduct(product.id);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <p className="smoothie-product-name mb-3">{product.name}</p>

                  <motion.img
                    src={product.fruiteImg}
                    alt=""
                    className="fruiteImg"
                    variants={fruitVariants}
                  />

                  <motion.img
                    src={product.deviceImg}
                    alt={product.name}
                    className="smoothieDevice"
                    variants={deviceVariants}
                    animate={
                      isActive
                        ? {
                            rotate: 12,
                            scale: 1,
                            y: [-2, -8, -2],
                          }
                        : { rotate: 0, scale: 1, y: 0 }
                    }
                    transition={
                      isActive
                        ? { y: { duration: 1.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }, default: { duration: 0.15 } }
                        : { duration: 0.15 }
                    }
                    style={{ zIndex: 2 }}
                  />

                  <motion.div
                    className="floatingShadow"
                    animate={
                      isActive
                        ? { y: [0, 6, 0], opacity: [0.5, 0.85, 0.5] }
                        : { y: 0, opacity: 0.5 }
                    }
                    transition={
                      isActive
                        ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.3 }
                    }
                  ></motion.div>
                </motion.div>
              </Col>
            );
          })}
        </Row>

        <ScrollReveal textClassName="cosmos-text-h3">
          Dive into a world of flavor fusion. The Smoothie Edition blends creamy
          textures with vibrant fruit notes for a refreshingly smooth vaping
          experience. Each puff delivers the perfect balance of sweetness and
          chill, crafted for those who crave taste as bold as their vibe.
        </ScrollReveal>
      </Container>
    </div>
  );
};

export default SmoothieProducts;
