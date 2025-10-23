import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/Warning";
import Header from "../components/Header";
import OurProducts from "../components/OurProducts";
import { Footer } from "../components/Footer";
import Version from "../components/Version";
import SmoothieBanner from "../components/SmoothieBanner";
import SmoothieProducts from "../components/SmoothieProducts";
import { images } from "../assets/images";

function SmoothieEdition() {
  return (
    <>
      <div className="smoothie_section">
        <Warning backgroundColor="#012243" borderRadius="0px" />
        <Header />
        <SmoothieBanner />
        <section className="smoothieVersions">
          <Container className="cosmos-ultra-cont">
            <Version
              showContext={false}
              features={[
                { icon: images.versionIcon1, text: "E-CPU Inside" },
                { icon: images.versionIcon2, text: "Dual Mesh Coil" },
                { icon: images.versionIcon3, text: "Dual Core" },
                {
                  icon: images.versionIcon4,
                  text: "Regular 40K<br />Pulse Mode 30K",
                },
                { icon: images.versionIcon5, text: "50 ML" },
                { icon: images.versionIcon6, text: "5% Nicotine" },
                { icon: images.versionIcon7, text: "Quick Charge" },
              ]}
            />
          </Container>
        </section>
        <section className="smoothieProductsSection">
          <SmoothieProducts />
        </section>
        <section className="ourProducts_section">
          <div className="ourProducts-bg"></div>
          <div className="position-relative">
            <OurProducts addBg={true} headingText="Similar Products" />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default SmoothieEdition;
