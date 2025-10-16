import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/warning";
import Header from "../components/Header";
import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";
import LogoSec from "../components/LogoSec";
import ContentSec from "../components/ContentSec";
import GeekPrime from "../components/GeekPrime";
import Testimonial from "../components/Testimonial";
import Blogs from "../components/Blogs";
import { Footer } from "../components/Footer";

function HomePage() {
    
  return (
    <>
      <Container className="position-relative">
        <Warning />
        <Header />
        <Banner />
      </Container>

      <section className="ourProducts_section">
        <h2 className="heading my-3">Our Products</h2>
        <Container className="position-relative">
          <OurProducts />
        </Container>
      </section>
      <section className="mb-3">
        <Container className="position-relative">
          <LogoSec />
        </Container>
      </section>
      <section>
        <Container className="position-relative">
          <ContentSec />
        </Container>
      </section>
      <section>
        <Container className="position-relative">
          <GeekPrime />
        </Container>
      </section>
      <section className="testimonial_section">
        <Container>
          <Testimonial />
        </Container>
      </section>
      <section className="blog_section">
        <Container>
          <Blogs />
        </Container>
      </section>
      <Footer/>
    </>
  );
}

export default HomePage;
