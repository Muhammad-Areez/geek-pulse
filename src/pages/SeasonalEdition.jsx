import Warning from "../components/Warning";
import Header from "../components/Header";
import OurProducts from "../components/OurProducts";
import { Footer } from "../components/Footer";
import SeasonalBanner from "../components/SeasonalBanner";
import { images } from "../assets/images";
import SeasonalProducts from "../components/SeasonalProducts";
import { motion } from "framer-motion";

function SeasonalEdition() {
  const leftDevices = [images.seasonal1, images.seasonal2];
  const rightDevices = [images.seasonal3, images.seasonal4];
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
            </motion.span>
            is a naturally Seasonal flavors that fills you with energy and
            health
          </motion.h2>
          <motion.img
            src={images.flower1}
            alt=""
            className="flower1"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            animate={{
              y: [0, -6, 0, 6, 0],
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            viewport={{ once: true, amount: 0.3 }}
          />

          <motion.img
            src={images.flower2}
            alt=""
            className="flower2"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            animate={{
              y: [0, 6, 0, -6, 0],
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            viewport={{ once: true, amount: 0.3 }}
          />

          <div className="seasonalDevices">
            {leftDevices.map((src, i) => (
              <motion.img
                key={`left-${i}`}
                src={src}
                alt=""
                className={`seasonalDevice${i + 1}`}
                initial={{ x: -200, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.3, ease: "easeOut" }}
                whileHover={{
                  // scale: 0.9,
                  y: -60,
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
                initial={{ x: 200, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.3, ease: "easeOut" }}
                whileHover={{
                  // scale: 0.9,
                  y: -60,
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
