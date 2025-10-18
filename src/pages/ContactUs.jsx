import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/warning";
import Header from "../components/Header";
import { images } from "../assets/images";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
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
            <img src={images.matrix2} className="matrix-img" />
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
