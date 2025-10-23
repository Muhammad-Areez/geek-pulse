import Header from "../components/Header";
import Warning from "../components/Warning";
import { Footer } from "../components/Footer";
import OurProducts from "../components/OurProducts";
import { images } from "../assets/images";
import { Col, Container, Row } from "react-bootstrap";
import Version from "../components/Version";
import { gsap } from "gsap";
import { useEffect } from "react";
import ScrollReveal from "../components/ScrollReveal";

const products = [
  {
    title: "SIRUS A",
    image: images.cosmosProductDevice2,
    boxImage: images.cosmosProductBox2
  },
  {
    title: "URANUS",
    image: images.cosmosProductDevice3,
    boxImage: images.cosmosProductBox3
  },
  {
    title: "THE MOON",
    image: images.cosmosProductDevice4,
    boxImage: images.cosmosProductBox4
  },
  {
    title: "WHITE HOLE",
    image: images.cosmosProductDevice1,
    boxImage: images.cosmosProductBox1
  },
  {
    title: "BLACK HOLE",
    image: images.cosmosProductDevice5,
    boxImage: images.cosmosProductBox5
  },
];

function CosmosEdition() {
  useEffect(() => {
    gsap.registerPlugin();

    gsap.to(".cosmos-device1", {
      y: -30,
      rotation: 1.5,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.to(".cosmos-device2", {
      y: -40,
      rotation: -1.5,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.to(".cosmos-device-sec1", {
      y: -30,
      rotation: 1.5,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.to(".cosmos-device-sec2", {
      y: -40,
      rotation: -1.5,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.to(".astronaut", {
      y: -40,
      x: 20,
      rotation: 4,
      duration: 6,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.to(".cosmos-moon", {
      rotation: 360,
      duration: 80,
      ease: "none",
      repeat: -1,
      transformOrigin: "center center",
    });

    gsap.from(".cosmo-hero-bg", {
      backgroundSize: "120%",
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true, 
    });
    gsap.to(".cosmo-hero-bg", {
      backgroundSize: "125%",
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,         
    });

    gsap.from(".cosmos-edition-bottom", {
      backgroundSize: "100%",
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true, 
    });
    gsap.to(".cosmos-edition-bottom", {
      backgroundSize: "105%",
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,         
    });

  }, []);


  return (
    <div className="position-relative cosmos-edition-main">
      <Warning borderRadius={"0px"} />
      <Header />
      <section className="cosmo-hero-bg">
        <div className="cosmos-hero-main">
          <div className="position-relative">
            <h1>COSMOS</h1>
            <span className="outline">COSMOS</span>
          </div>
          <div className="position-relative">
            <h1>EDITIONS</h1>
            <span className="outline">EDITIONS</span>
          </div>
          <img
            src={images.cosmosGalaxy}
            alt="galaxy"
            className="cosmos-galaxy"
          />
          <img
            src={images.cosmosDevice1}
            alt="cosmosDevice1"
            className="cosmos-device1"
          />
          <img
            src={images.cosmosDevice2}
            alt="cosmosDevice2"
            className="cosmos-device2"
          />
          <img src={images.astronaut} alt="astronaut" className="astronaut" />
        </div>
        <div className="cosmos-ultra">
          <img
            src={images.aeroplane}
            alt="aeroplane"
            className="cosmos-aeroplane-img"
          />
          <Container className="cosmos-ultra-cont">
            <Version
              showContext={false}
              cosmosEdition={true}
              featureColor="linear-gradient(#7C81FF, #A42789)"
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
        </div>
        <div className="cosmos-product-heading">
          <h3>OUR PRODUCTS</h3>
        </div>
      </section>
      <div className="cosmos-edition-bottom">
        <section className="cosmos-product-main">
          <img src={images.matrix} alt="martix" className="cosmos-matrix" />
          <img src={images.moon} alt="moon" className="cosmos-moon" />
          <Container>
            <Row className="d_flex justify-content-center">
              {products.map((item, index) => (
                <Col md={4}>
                  <div className="cosmos-product-card">
                    <div className="cosmos-card-top">
                      <img
                        src={item.image}
                        alt="Device"
                        className="cosmos-device device-front"
                      />
                      <img
                        src={item.boxImage}
                        alt="Box"
                        className="cosmos-device device-back"
                      />
                      <img src={images.cosmosStand} alt="Device Stand" className="cosmos-stand" />
                    </div>
                    <div className="cosmos-card-bottom">
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section className="cosmos-text-main">
          <img src={images.cosmosDeviceSec1} alt="device" className="cosmos-device-sec1" />
          <img src={images.cosmosDeviceSec2} alt="device" className="cosmos-device-sec2" />
          <ScrollReveal textClassName="cosmos-text-h3">
            Where sophistication meets performance. The Platinum Edition represents the pinnacle of vaping excellence, engineered for those who demand the very best. Designed with a refined metallic finish and powered by cutting-edge airflow technology, every detail reflects precision and luxury.
          </ScrollReveal>
        </section>
        <section>
          <OurProducts headingText="SIMILAR PRODUCTS" color="#fff" />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default CosmosEdition;
