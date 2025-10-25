import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { images } from "../assets/images";
import ScrollReveal from "./ScrollReveal";

const SmoothieProducts = () => {
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

  return (
    <div className="smoothieBg py-5">
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
        <Row className="justify-content-center p-5">
          {products.map((product, index) => (
            <Col key={product.id} lg={5} md={6} sm={6} className="mb-5">
              <motion.div
                className={`smoothie-product-card text-center mb-3 smoothie-card-${
                  index + 1
                }`}
                whileHover="hover"
                whileTap="hover"
                initial="initial"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="smoothie-product-name mb-3">{product.name}</p>
                <motion.img
                  src={product.fruiteImg}
                  alt=""
                  className="fruiteImg"
                  variants={{
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
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    },
                  }}
                />
                <motion.img
                  src={product.deviceImg}
                  alt={product.name}
                  className="smoothieDevice"
                  variants={{
                    initial: {
                      rotate: 0,
                      scale: 1,
                      y: 0,
                      zIndex: 2,
                      filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.2))",
                    },
                    hover: {
                      rotate: 12,
                      scale: 1.05,
                      y: -10,
                      filter: "drop-shadow(0 20px 25px rgba(255,182,193,0.6))",
                      transition: { duration: 0.1, ease: "easeOut" },
                    },
                  }}
                  animate={{
                    y: [0, -6, 0, 4, 0],
                    scale: [1, 1.02, 1, 1.01, 1],
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />

                {/* Floating Glow / Shadow */}
                <motion.div
                  className="floatingShadow"
                  animate={{
                    y: [0, 6, 0],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>
        <ScrollReveal textClassName="cosmos-text-h3">
          Dive into a world of flavor fusion. The Smoothie Edition blends creamy
          textures with vibrant fruit notes for a refreshingly smooth vaping
          experience. Each puff delivers the perfect balance of sweetness and
          chill, crafted for those who crave taste as bold as their vibe.
        </ScrollReveal>
        {/* <ScrollReveal
          containerClassName="title"
          textClassName="smoothie-text"
          baseRotation={3}
          baseOpacity={0.1}
          blurStrength={6}
          enableBlur={true}
        >
          Dive into a world of flavor fusion. The Smoothie Edition blends creamy
          textures with vibrant fruit notes for a refreshingly smooth vaping
          experience. Each puff delivers the perfect balance of sweetness and
          chill, crafted for those who crave taste as bold as their vibe.
        </ScrollReveal> */}
      </Container>
    </div>
  );
};

export default SmoothieProducts;
