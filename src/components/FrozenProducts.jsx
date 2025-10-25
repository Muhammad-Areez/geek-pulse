import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { images } from "../assets/images";

const FrozenProducts = () => {
  const [isXS, setIsXS] = useState(false);
  const [isSm, setIsSm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsXS(window.innerWidth <= 425);
      setIsSm(window.innerWidth > 425 && window.innerWidth <= 575);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const products = [
    {
      id: 1,
      name: "Blue Razz Ice",
      deviceImg: images.frozendevice1,
      boxImg: images.frozenbox2,
    },
    {
      id: 2,
      name: "Miami Mint",
      deviceImg: images.frozendevice2,
      boxImg: images.frozenbox3,
    },
    {
      id: 3,
      name: "Banana Taffy Freeze",
      deviceImg: images.frozendevice3,
      boxImg: images.frozenbox4,
    },
    {
      id: 4,
      name: "Berry Bliss",
      deviceImg: images.frozendevice4,
      boxImg: images.frozenbox5,
    },
    {
      id: 5,
      name: "Blue Rancher",
      deviceImg: images.frozendevice5,
      boxImg: images.frozenbox6,
    },
    {
      id: 6,
      name: "Blueberry Watermelon",
      deviceImg: images.frozendevice6,
      boxImg: images.frozenbox2,
    },
  ];

  const boxVariants = {
    rest: {
      opacity: 0,
      rotateY: -50,
      rotateZ: -8,
      x: isXS ? 60 : isSm ? 70 : 100,
      y: isXS ? 20 : isSm ? 10 : 10,
      scale: isXS ? 0.9 : isSm ? 1 : 0.9,
      zIndex: 0,
      filter: "blur(8px)",
      transition: { duration: 0.3 },
    },
    hover: {
      opacity: 1,
      rotateY: 0,
      x: isXS ? 30 : isSm ? 40 : 40,
      y: isXS ? -130 : isSm ? -100 : -50,
      scale: isXS ? 0.8 : isSm ? 0.9 : 0.7,
      rotate: 0,
      zIndex: 1,
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const deviceVariants = {
    rest: {
      x: 0,
      scale: isXS ? 0.55 : isSm ? 0.7 : 0.8,
      filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    hover: {
      scale: isXS ? 0.5 : isSm ? 0.6 : 0.5,
      y: isXS ? 40 : isSm ? 60 : 85,
      x: isXS ? 20 : isSm ? 25 : 30,
      filter: "drop-shadow(0 0 18px rgba(173, 216, 230, 0.9))",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <div className="frozenBg py-5">
      <h2 className="heading mb-5 text-center">Our Products</h2>

      <Row className="justify-content-center p-2">
        {products.map((product) => (
          <Col key={product.id} lg={4} md={6} sm={6} xs={12} className="mb-5">
            <motion.div
              className="frozen-product-card text-center"
              initial="rest"
              whileTap="hover"
              whileHover="hover"
              animate="rest"
            >
              <p className="frozen-product-name mb-3">{product.name}</p>

              {/* BOX IMAGE */}
              <motion.img
                src={product.boxImg}
                alt=""
                className="frozenBox"
                variants={boxVariants}
              />

              {/* DEVICE IMAGE */}
              <motion.img
                src={product.deviceImg}
                alt={product.name}
                className="frozenDevice"
                variants={deviceVariants}
                initial={{ opacity: 0, scale: isXS ? 0.7 : 0.6, rotate: -15 }}
                whileInView={{
                  opacity: 1,
                  scale: isXS ? 0.7 : 0.8,
                  rotate: 0,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              />
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FrozenProducts;
