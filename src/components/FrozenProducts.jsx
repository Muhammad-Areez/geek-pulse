import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { images } from "../assets/images";

const FrozenProducts = () => {
  const products = [
    { id: 1, name: "Blue Razz Ice", deviceImg: images.frozendevice1 },
    { id: 2, name: "Miami Mint", deviceImg: images.frozendevice2 },
    { id: 3, name: "Banana Taffy Freeze", deviceImg: images.frozendevice3 },
    { id: 4, name: "Berry Bliss", deviceImg: images.frozendevice4 },
    { id: 5, name: "Blue Rancher", deviceImg: images.frozendevice5 },
    { id: 6, name: "Blueberry Watermelon", deviceImg: images.frozendevice6 },
  ];

  return (
    <div className="frozenBg py-5">
      <h2 className="heading mb-5 text-center">Our Products</h2>

      <Row className="justify-content-center p-5">
        {products.map((product) => (
          <Col key={product.id} lg={4} md={6} sm={12} className="mb-5">
            <div className="frozen-product-card text-center">
              <p className="frozen-product-name mb-3">{product.name}</p>

              {/* DEVICE IMAGE */}
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
                  scale: 1.08,
                  filter: "drop-shadow(0 0 18px rgba(173, 216, 230, 0.9))",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              />
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
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FrozenProducts;
