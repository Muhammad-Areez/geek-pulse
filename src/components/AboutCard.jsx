import React from "react";
import { motion } from "framer-motion";
import { images } from "../assets/images";

const AboutCard = () => {
  const cards = [
    {
      id: 1,
      image: images.about1,
      title: "TECHNOLOGY DEVELOPMENT",
      text: "Materials Research Atomization Technology Research Advanced Technology Research",
    },
    {
      id: 2,
      image: images.about2,
      title: "AEROSOL RESEARCH",
      text: "Harmful Constituents Analysis Deposition of Aerosol in Lungs",
    },
    {
      id: 3,
      image: images.about3,
      title: "TOXICOLOGICAL TESTING",
      text: "In Vitro Toxicological Testing In Vivo Toxicological Testing",
    },
    {
      id: 4,
      image: images.about4,
      title: "CLINICAL TRIALS",
      text: "Behavioral Study Pharmacokinetic Study Abuse/Addiction Analysis",
    },
    {
      id: 5,
      image: images.about5,
      title: "LONG-TERM ASSESSMENT",
      text: "The Impact of Products on Population Health Long-term Tracking of Customer Usage",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.6, ease: "easeOut" },
    }),
  };
  // ✨ Typing animation for paragraph
  const letterAnimation = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.02, // typing speed
        duration: 0.03,
      },
    }),
  };
  return (
    <div className="aboutWrapper d_flex">
      {cards.map((card, i) => (
        <motion.div
          key={card.id}
          className="aboutCard"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 12px 25px rgba(0,0,0,0.25)",
          }}
          transition={{ type: "spring", stiffness: 180, damping: 14 }}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          {/* Image Animation */}
          <motion.img
            src={card.image}
            alt={card.title}
            className="aboutbg"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
              filter: "brightness(0.85)",
            }}
          />

          {/* Overlay (for text contrast) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.05) 70%)",
              borderRadius: "20px",
              zIndex: 0,
            }}
          ></div>

          {/* Title (static, no animation) */}
          <p className="title" style={{ zIndex: 2, position: "absolute" }}>
            {card.title.split(" ").map((word, i) => (
              <span key={i} style={{ display: "block" }}>
                {word}
              </span>
            ))}
          </p>

          {/* Paragraph (static, no animation) */}
          <p className="para" style={{ zIndex: 2, position: "absolute" }}>
            {card.text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                initial="hidden"
                whileInView="visible"
                custom={index}
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                }}
              >
                {char}
              </motion.span>
            ))}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutCard;
