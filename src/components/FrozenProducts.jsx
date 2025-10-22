import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { images } from "../assets/images";

const FrozenProducts = () => {
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
      x: 100,
      y: 10,
      scale: 0.9,
      zIndex: 0,
      filter: "blur(8px)",
      transition: { duration: 0.3 },
    },
    hover: {
      opacity: 1,
      rotateY: 0,
      x: 40,
      y: -50,
      scale: 1.5,
      rotate: 0,
      zIndex: 1,
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
    },
  };
  const deviceVariants = {
    rest: {
      // y: 80,
      x: 0,
      scale: 0.8,
      filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    hover: {
      scale: 0.6,
      y: 70,
      x: 30,
      filter: "drop-shadow(0 0 18px rgba(173, 216, 230, 0.9))",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <div className="frozenBg py-5">
      <h2 className="heading mb-5 text-center">Our Products</h2>

      <Row className="justify-content-center p-5">
        {products.map((product) => (
          <Col key={product.id} lg={4} md={6} sm={12} className="mb-5">
            <motion.div
              className="frozen-product-card text-center"
              initial="rest"
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
                initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                whileInView={{
                  opacity: 1,
                  scale: 0.8,
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
