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

              {/* BOX IMAGE (comes from behind) */}
              <motion.img
                src={product.boxImg}
                alt=""
                className="frozenBox"
                variants={{
                  rest: {
                    opacity: 0,
                    rotateY: -50,
                    rotateZ: -8,
                    x: -100,
                    y: 10,
                    scale: 0.9,
                    zIndex: 0,
                    filter: "blur(8px)",
                  },
                  hover: {
                    opacity: 1,
                    rotateY: 0,
                    rotateZ: 30,
                    x: 0,
                    y: -100,
                    scale: 1.3,
                    rotate: -10,
                    zIndex: 1,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.9,
                      ease: [0.25, 1, 0.5, 1],
                    },
                  },
                }}
              />

              {/* DEVICE IMAGE (floats + hover glow) */}
              <motion.img
                src={product.deviceImg}
                alt={product.name}
                className="frozenDevice"
                initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 0.8,
                  filter: "drop-shadow(0 0 18px rgba(173, 216, 230, 0.9))",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              />

              {/* FLOATING SHADOW */}
              <motion.div
                className="floatingShadow"
                animate={{
                  x: [0, 10, 0, -10, 0],
                  y: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FrozenProducts;
