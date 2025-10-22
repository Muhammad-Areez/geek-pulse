import Warning from "../components/Warning";
import Header from "../components/Header";
import OurProducts from "../components/OurProducts";
import { Footer } from "../components/Footer";
import SeasonalBanner from "../components/SeasonalBanner";
import { images } from "../assets/images";
import SeasonalProducts from "../components/SeasonalProducts";
import { motion } from "framer-motion";

function SeasonalEdition() {
  const leftDevices = [images.seasonalDevice2, images.seasonalDevice1];
  const rightDevices = [images.seasonalDevice3, images.seasonalDevice4];
  return (
    <>
      <div className="seasonal_section">
        <section className="seasonalBanner position-relative">
          <Warning backgroundColor="#012243" borderRadius="0px" />
          <Header />
          <SeasonalBanner />
        </section>
        <section className="seasonal_flavours">
          {/* Heading with glow */}
          <motion.h2
            className="heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 10px #df6d28",
                  "0 0 20px #ff9933",
                  "0 0 10px #df6d28",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              Ultra X
            </motion.span>{" "}
            is a naturally Seasonal flavors that fills you with energy and
            health
          </motion.h2>

          {/* Flower 1 – subtle pop from right */}
          {/* 🌸 Flower 1 — Slide in from Right on Scroll */}

          <motion.img
            src={images.flower1}
            alt=""
            className="flower1"
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          <motion.img
            src={images.flower2}
            alt=""
            className="flower2"
            initial={{ x: 150, opacity: 0, rotate: 0 }}
            whileInView={{ x: 0, opacity: 1, rotate: 360 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {/* Devices – entry from sides + hover pop */}
          <div className="seasonalDevices">
            {leftDevices.map((src, i) => (
              <motion.img
                key={`left-${i}`}
                src={src}
                alt=""
                className={`seasonalDevice${i + 1}`}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.3, ease: "easeOut" }}
                whileHover={{
                  scale: 1.08,
                  // rotate: 2,
                  // boxShadow: "0px 25px 60px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.4 },
                }}
              />
            ))}

            {rightDevices.map((src, i) => (
              <motion.img
                key={`right-${i}`}
                src={src}
                alt=""
                className={`seasonalDevice${i + 3}`}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.3, ease: "easeOut" }}
                whileHover={{
                  scale: 1.08,
                  // rotate: 2,
                  // boxShadow: "0px 25px 60px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.4 },
                }}
              />
            ))}
          </div>
        </section>
        <section>
          <SeasonalProducts />
        </section>
        <section className="ourProducts_section seasonal-ourProducts">
          <div className="our-bg" style={{ background: "#f7ebd4" }}></div>
          <div className="position-relative">
            <OurProducts addBg={true} headingText="Similar Products" />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default SeasonalEdition;
