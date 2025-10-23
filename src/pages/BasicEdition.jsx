import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/Warning";
import Header from "../components/Header";
import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";
import Testimonial from "../components/Testimonial";
import { Footer } from "../components/Footer";
import BasicBanner from "../components/BasicBanner";
import Version from "../components/Version";
import BasicProducts from "../components/BasicProducts";

function BasicEdition() {
  return (
    <>
      <Container className="position-relative">
        <Warning backgroundColor="#012243" />
        <Header />
        <BasicBanner />
      </Container>
      <section>
        <Container>
          <Version />
        </Container>
      </section>
      <section className="basicProductsSection">
        <Container>
          <h2 className="heading mb-5">Basic Editions</h2>
          <BasicProducts/>
        </Container>
      </section>
      <section className="ourProducts_section">
        <Container className="position-relative">
          <OurProducts headingText="Similar Products"/>
        </Container>
      </section>

      <section className="testimonial_section">
        <Container>
          <Testimonial />
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default BasicEdition;
