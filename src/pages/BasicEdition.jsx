import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/warning";
import Header from "../components/Header";
import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";
import Testimonial from "../components/Testimonial";
import { Footer } from "../components/Footer";
import BasicBanner from "../components/BasicBanner";

function BasicEdition() {
    
  return (
    <>
      <Container className="position-relative">
        <Warning backgroundColor="#012243"/>
        <Header />
        <BasicBanner />

      </Container>

      <section className="ourProducts_section">
        <h2 className="heading my-3">The Pulse Collection</h2>
        <Container className="position-relative">
          <OurProducts />
        </Container>
      </section>
     

      <section className="testimonial_section">
        <Container>
          <Testimonial />
        </Container>
      </section>
      
      <Footer/>
    </>
  );
}

export default BasicEdition;
