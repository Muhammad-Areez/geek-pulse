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

function HomePage() {
  return (
    <>
      <section className=" position-relative">
        <Warning borderRadius="0px" />
        <Header />
        <Banner />
      </section>
      <section className="ourProducts_section">
        <Container className="position-relative">
          <OurProducts headingText="The Pulse Collection" />
        </Container>
      </section>
      <section className="mb-3">
        <Container className="position-relative">
          <LogoSec />
        </Container>
      </section>
      <section>
        <Container className="position-relative">
          <GeekPrime />
        </Container>
      </section>
      <section className="testimonial_section">
        {/* <Container>
        </Container> */}
        <Testimonial />
      </section>
      <section className="blog_section">
        <Container>
          <Blogs />
        </Container>
      </section>
      <Footer isHomePage />
    </>
  );
}

export default HomePage;
