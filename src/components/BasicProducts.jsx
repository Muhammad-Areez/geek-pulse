import React from "react";
import { Row, Col } from "react-bootstrap";
import { images } from "../assets/images";
import { motion } from "framer-motion";

const BasicProducts = () => {
  const products = [
    {
      id: 1,
      name: "Blue Razz Ice",
      deviceImg: images.basicdevice4,
      boxImg: images.basicbox1,
    },
    {
      id: 2,
      name: "Miami Mint",
      deviceImg: images.basicdevice9,
      boxImg: images.basicbox2,
    },
    {
      id: 3,
      name: "Banana Taffy Freeze",
      deviceImg: images.basicdevice6,
      boxImg: images.basicbox3,
    },
    {
      id: 4,
      name: "Berry Bliss",
      deviceImg: images.basicdevice8,
      boxImg: images.basicbox4,
    },
    {
      id: 5,
      name: "Blue Rancher",
      deviceImg: images.basicdevice4,
      boxImg: images.basicbox5,
    },
    {
      id: 6,
      name: "Blueberry Watermelon",
      deviceImg: images.basicdevice2,
      boxImg: images.basicbox6,
    },
    {
      id: 7,
      name: "Cotton Candy",
      deviceImg: images.basicdevice7,
      boxImg: images.basicbox7,
    },
    {
      id: 8,
      name: "White Peach Raspberry",
      deviceImg: images.basicdevice2,
      boxImg: images.basicbox8,
    },
    {
      id: 9,
      name: "Jolly Rancher",
      deviceImg: images.basicdevice9,
      boxImg: images.basicbox9,
    },
    {
      id: 10,
      name: "Orange Creamsicle",
      deviceImg: images.basicdevice6,
      boxImg: images.basicbox10,
    },
    {
      id: 11,
      name: "Peach Ice",
      deviceImg: images.basicdevice3,
      boxImg: images.basicbox11,
    },
    {
      id: 12,
      name: "Pineapple Splash",
      deviceImg: images.basicdevice6,
      boxImg: images.basicbox12,
    },
    {
      id: 13,
      name: "Pink Lemonade",
      deviceImg: images.basicdevice2,
      boxImg: images.basicbox13,
    },
    {
      id: 14,
      name: "Skittles",
      deviceImg: images.basicdevice1,
      boxImg: images.basicbox14,
    },
    {
      id: 15,
      name: "Sour Apple Ice",
      deviceImg: images.basicdevice3,
      boxImg: images.basicbox15,
    },
    {
      id: 16,
      name: "Sour Mango Pineapple",
      deviceImg: images.basicdevice6,
      boxImg: images.basicbox16,
    },
    {
      id: 17,
      name: "Strawberry Banana",
      deviceImg: images.basicdevice6,
      boxImg: images.basicbox17,
    },
    {
      id: 18,
      name: "Strawberry Cream",
      deviceImg: images.basicdevice2,
      boxImg: images.basicbox18,
    },
    {
      id: 19,
      name: "Strawberry Mango",
      deviceImg: images.basicdevice3,
      boxImg: images.basicbox19,
    },
    {
      id: 20,
      name: "Strawberry Watermelon",
      deviceImg: images.basicdevice2,
      boxImg: images.basicbox20,
    },
  ];

  const boxVariants = {
    hidden: { rotate: 8, opacity: 0, y: 40 },
    visible: {
      rotate: 0,
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} lg={3} md={4} sm={6} xs={6} className="mb-4">
          <motion.div
            className="basic-product-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover" // hover triggers the device animation
            variants={{
              hidden: {},
              visible: {},
              hover: {},
            }}
          >
            {/* BOX IMAGE */}
            <motion.img
              src={product.boxImg}
              alt={product.name}
              className="basicBox"
              variants={boxVariants}
            />

            {/* DEVICE IMAGE */}
            <motion.img
              src={product.deviceImg}
              alt={product.name}
              className="basicDevice"
              variants={{
                hidden: { opacity: 0, y: 15, scale: 0.95 }, // hidden by default
                hover: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.3, ease: "easeOut" },
                },
              }}
            />

            <p className="basic-product-name">{product.name}</p>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default BasicProducts;
