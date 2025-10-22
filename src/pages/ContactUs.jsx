import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/Warning";
import Header from "../components/Header";
import { images } from "../assets/images";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Faqs from "../components/Faqs";

function ContactUs() {
  return (
    <>
      <Container className="position-relative">
        <Warning />
        <Header />
        <section className="logo-section contactus_section">
          <div className="logo-container">
            <motion.img
              src={images.matrix2}
              className="matrix-img"
              alt="Matrix lines"
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.8, 0.8, 0.6],
                rotate: [0, 0.2, 0],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <h3 className="contact_heading">Contact Us</h3>
          </div>
        </section>
      </Container>
      <Container>
        <ContactForm />
      </Container>
      <Container>
        <Faqs />
      </Container>
      <Footer />
    </>
  );
}

export default ContactUs;
