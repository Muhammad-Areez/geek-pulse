import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { images } from "../assets/images";
import ScrollReveal from "./ScrollReveal";

const SeasonalProducts = () => {
  const products = [
    {
      id: 1,
      name: "berry blossom",
      deviceImg: images.seasonalDevice3,
      boxImg: images.seasonalBox3,
    },
    {
      id: 2,
      name: "peach heat wave",
      deviceImg: images.seasonalDevice1,
      boxImg: images.seasonalBox1,
    },
    {
      id: 3,
      name: "honey dew bloom",
      deviceImg: images.seasonalDevice2,
      boxImg: images.seasonalBox2,
    },
    {
      id: 3,
      name: "bloom berry bleez ",
      deviceImg: images.seasonalDevice4,
      boxImg: images.seasonalBox4,
    },
  ];

  return (
    <div className="seasonalBg py-5">
      <h2 className="heading mb-3">Our Products</h2>
      <motion.img
        src={images.flower3}
        alt=""
        className="flower3"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        animate={{
          y: [0, -6, 0, 6, 0],
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <motion.img
        src={images.flower4}
        alt=""
        className="flower4"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        animate={{
          y: [0, 6, 0, -6, 0],
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <motion.img
        src={images.seasonalBg3}
        alt=""
        className="seasonalBg3"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        animate={{
          y: [0, -4, 0, 4, 0],
          scale: [1, 1.01, 1, 1.01, 1],
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <Container>
        <Row className="justify-content-center p-5">
          {products.map((product, index) => (
            <Col key={product.id} lg={6} md={6} sm={6} className="mb-5">
              <motion.div
                className={`seasonal-product-card text-center seasonal-card-${
                  index + 1
                }`}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Box Animation */}
                <motion.img
                  src={product.boxImg}
                  alt=""
                  className="seasonalbox"
                  variants={{
                    rest: {
                      opacity: 0,
                      x: -90,
                      scale: 1,
                      rotate: -5,
                    },
                    hover: {
                      opacity: 1,
                      x: 50,
                      y: -60,
                      scale: 1.3,
                      rotate: 0,
                    },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* Device Animation */}
                <motion.img
                  src={product.deviceImg}
                  alt={product.name}
                  className="seasonalDevice"
                  variants={{
                    rest: { scale: 1.5, y: 40 },
                    hover: { scale: 1, y: 120, x: 90 },
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />

                {/* Product Name */}
                <motion.p
                  className="seasonal-product-name mb-3"
                  variants={{
                    rest: { opacity: 1, y: 50 },
                    // hover: { opacity: 1, y: 50 },
                  }}
                  // transition={{ duration: 0.3 }}
                >
                  {product.name}
                </motion.p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SeasonalProducts;
