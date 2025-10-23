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
import FrozenBanner from "../components/FrozenBanner";
import FrozenProducts from "../components/FrozenProducts";
import { images } from "../assets/images";
// import bgImg from "../assets/images/bgImg.svg"
function FrozenEdition() {
  return (
    <>
      <div className="frozen_section">
        <section className="FrozenBanner position-relative">
          <Warning backgroundColor="#012243" borderRadius="0px"/>
          <Header />
          <FrozenBanner />
        </section>
        <section>
          <Container>
            <Version
              showContext={false}
              featureColor="#00B2FF"
              //   featureColor="linear-gradient(135deg, #FF6B6B, #FFD93D)"
            />
          </Container>
        </section>
        <section className="frozenProductsSection">
          <FrozenProducts />
        </section>
        <section className="ourProducts_section frozen-ourProducts">
          <img src={images.ourBg} className="our-bg"/>
          <div className="position-relative">
            <OurProducts addBg={true} headingText="Simper Products" />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default FrozenEdition;
