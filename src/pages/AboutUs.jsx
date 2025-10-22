import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/Warning";
import Header from "../components/Header";
import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";
import LogoSec from "../components/LogoSec";
import ContentSec from "../components/ContentSec";
import GeekPrime from "../components/GeekPrime";
import Testimonial from "../components/Testimonial";
import Blogs from "../components/Blogs";
import { Footer } from "../components/Footer";
import AboutCard from "../components/AboutCard";
import { images } from "../assets/images";

function AboutUs() {
  return (
    <>
      <section className="aboutUs_section">
        <Container className="position-relative">
          <Warning />
          <Header />
          <LogoSec />
        </Container>

        <section className="about_section2">
          <h2 className="heading">
            FROM TECHNOLOGY DEVELOPMENT TO HEALTH APPLICATIONS
          </h2>
          <AboutCard />
        </section>
          <section className="registered_section">
            <div className="d_flex">
              <img src={images.aboutLogo1} alt="" className="aboutLogo" />
              <img src={images.aboutLogo2} alt="" className="aboutLogo" />
              <img src={images.aboutLogo3} alt="" className="aboutLogo" />
              <img src={images.aboutLogo4} alt="" className="aboutLogo" />
              <img src={images.aboutLogo5} alt="" className="aboutLogo" />
            </div>
          </section>
        <section className="ourProducts_section">
          <div className="position-relative">
            <OurProducts addBg={false} headingText="Our Products" />
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default AboutUs;
