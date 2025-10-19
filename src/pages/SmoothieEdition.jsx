import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/warning";
import Header from "../components/Header";
import OurProducts from "../components/OurProducts";
import { Footer } from "../components/Footer";
import Version from "../components/Version";
import FrozenProducts from "../components/FrozenProducts";
import SmoothieBanner from "../components/SmoothieBanner";
// import bgImg from "../assets/images/bgImg.svg"
function SmoothieEdition() {
  return (
    <>
      <div className="smoothie_section">
        <Container className="position-relative">
          <Warning backgroundColor="#012243" />
          <Header />
          <SmoothieBanner />
        </Container>
        <section className="smoothieVersions"> 
          <Container>
            <Version
              showContext={false}
            />
          </Container>
        </section>
        <section className="frozenProductsSection">
          <FrozenProducts />
        </section>
        <section className="ourProducts_section">
          <div className="position-relative">
            <OurProducts addBg={true} headingText="Simper Products" />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default SmoothieEdition;
