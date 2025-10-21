import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/warning";
import Header from "../components/Header";
import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";
import Testimonial from "../components/Testimonial";
import { Footer } from "../components/Footer";
import FrozenProducts from "../components/FrozenProducts";
import SeasonalBanner from "../components/SeasonalBanner";
import { images } from "../assets/images";
import SeasonalProducts from "../components/SeasonalProducts";

function SeasonalEdition() {
  return (
    <>
      <div className="seasonal_section">
        <section className="seasonalBanner position-relative">
          <Warning backgroundColor="#012243" borderRadius="0px" />
          <Header />
          <SeasonalBanner />
        </section>
        <section className="seasonal_flavours">
          <h2 className="heading">
            <span>Ultra X </span>
            is a naturally Seasonal flavors that fills you with energy and
            health
          </h2>
          <img src={images.flower1} alt="" className="flower1" />
          <img src={images.flower2} alt="" className="flower2" />
          {/* <img src={images.flower3} alt="" className="flower3" />
          <img src={images.flower4} alt="" className="flower4" /> */}
          {/* <img src={images.seasonalBg3} alt="" className="seasonalBg3" /> */}

          <div className="seasonalDevices">
            <img
              src={images.seasonalDevice2}
              alt=""
              className="seasonalDevice1"
            />
            <img
              src={images.seasonalDevice1}
              alt=""
              className="seasonalDevice2"
            />
            <img
              src={images.seasonalDevice3}
              alt=""
              className="seasonalDevice3"
            />
            <img
              src={images.seasonalDevice4}
              alt=""
              className="seasonalDevice4"
            />
          </div>
        </section>
        <section>
          
          <SeasonalProducts />
        </section>

        <section className="ourProducts_section">
          <div className="position-relative">
            <OurProducts addBg={true} headingText="Similar Products" />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default SeasonalEdition;
