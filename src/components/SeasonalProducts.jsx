import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { images } from "../assets/images";
import ScrollReveal from "./ScrollReveal";

const SeasonalProducts = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isXS, setIsXS] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      id: 4,
      name: "bloom berry bleez",
      deviceImg: images.seasonalDevice4,
      boxImg: images.seasonalBox4,
    },
  ];

  return (
    <div className="seasonalBg py-5">
      <h2 className="heading mb-3">Our Products</h2>

      {/* Floating background images */}
      <motion.img
        src={images.flower3}
        alt=""
        className="flower3"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        animate={{ y: [0, -6, 0, 6, 0] }}
        transition={{
          duration: 1.2,
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
        animate={{ y: [0, 6, 0, -6, 0] }}
        transition={{
          duration: 1.2,
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <Container>
        <Row className="justify-content-center p-">
          {products.map((product, index) => (
            <Col key={product.id} lg={6} md={6} sm={6} xs={12} className="mb-5">
              <motion.div
                className={`seasonal-product-card text-center seasonal-card-${
                  index + 1
                }`}
                initial="rest"
                whileTap="hover"
                whileHover="hover"
                animate="rest"
              >
                {/* Box */}
                <motion.img
                  src={product.boxImg}
                  alt=""
                  className="seasonalbox"
                  variants={{
                    rest: {
                      opacity: 0,
                      x: isMobile ? -30 : -90,
                      scale: 1,
                      rotate: -5,
                    },
                    hover: {
                      opacity: 1,
                      x: isMobile ? 10 : 50,
                      y: isMobile ? -50 : -60,
                      scale: isXS ? 1.3 : isMobile ? 1.4 : 1.3, 
                      rotate: 0,
                    },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* Device */}
                <motion.img
                  src={product.deviceImg}
                  alt={product.name}
                  className="seasonalDevice"
                  variants={{
                    rest: {
                      scale: isXS ? 1.5 : isMobile ? 1.3 : 1.5, 
                      y: 40,
                    },
                    hover: {
                      scale: isXS ? 1.3 : 1, 
                      y: isMobile ? 90 : 100,
                      x: isMobile ? 70 : 130,
                    },
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />

                {/* Product Name */}
                <motion.p
                  className="seasonal-product-name mb-3"
                  variants={{
                    rest: { opacity: 1, y: 50 },
                  }}
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
