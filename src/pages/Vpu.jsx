import { Col, Container, Row } from "react-bootstrap";
import Warning from "../components/Warning";
import Header from "../components/Header";
import BasicBanner from "../components/BasicBanner";
import { images } from "../assets/images";
import { Footer } from "../components/Footer";
import { videos } from "../assets/videos";
import { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
// import "./VpuHero.css";
import bg from "../assets/images/vpu-banner-bg.svg";

function Vpu() {
    
  return (
    <>
      
        <div className="postion-relative vpu-banner-main">
        <Warning borderRadius="0px"/>
        <Header />
        <section className="vpu-hero">
          <motion.div
            className="vpu-bg-layer"
            style={{ backgroundImage: `url(${bg})` }}
            animate={{
              backgroundPositionX: ["0%", "100%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />

          {/* Text animation */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            VPU
          </motion.h1>
        </section>
        </div>
        <Container className="position-relative">
        <section className="vpu-sec">
          <Row className="px-3 px-md-5">
            <Col lg={6}>
              <div className="vpu-sec-left">
                <h3>
                  As CPU for computer, VPU stands for Vaping Processing Unit.
                </h3>
                <h6>
                  This technology platform integrates the most recent advances
                  in fluid and heat transmission, material safety, and advanced
                  material research to offer customers a complete solution.
                </h6>
              </div>
            </Col>
            <Col lg={6}>
              <div className="vpu-sec-right">
                <img src={images.vpuSecLeft} alt="vpu" />
              </div>
            </Col>
          </Row>
        </section>
        <section className="vpu-experience">
          <Row className="px-3 px-md-5">
            <Col lg={6}>
              <div className="experience-left">
                <img src={images.vapeExperience} alt="vape" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="experience-right">
                <h3>
                  VAPE EXPERIENCE <br />
                  <span>Heat Generators</span>
                </h3>
                <h6>
                  Heat generators are one of the most important components of
                  electro-atomization. The product adopting the vpu technology
                  had a cloud volume increase of 23.7% and each puff provides
                  the user with a consistent flavor restoration
                </h6>
              </div>
            </Col>
          </Row>
        </section>
        <section className="vpu-standard">
          <motion.div
            className="vpu-bg-layer"
            style={{ backgroundImage: `url(${bg})` }}
            animate={{
              backgroundPositionX: ["0%", "100%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <h3>
            VPU Non-woven Standard <br />
            The Industry-leading Testing Standard
          </h3>
        </section>
        <section className="video-sec1">
          <video
            src={videos.vpu1}
            autoPlay
            loop
            muted
            playsInline
            className="video-playback"
          />
        </section>
        <section className="vpu-safety">
          <Row className="px-3 px-md-5">
            <Col md={5}>
              <div className="vpu-safety-left">
                <h3>Safety Performance</h3>
                <h6>
                  Our R&D team has done a lot of aerosol analysis to overcome
                  the problems of excessive condensation, oil absorption, and
                  oil frying, so we can quickly find and solve these problems,
                  and finally achieve a more balanced atomization effect,
                  greatly reduce the possibility of gluing the core, and improve
                  overall safety of use.
                </h6>
              </div>
            </Col>
          </Row>
          <img src={images.vpuSafety} alt="safety" />
        </section>
        <section className="video-sec1">
          <video
            src={videos.vpu2}
            autoPlay
            loop
            muted
            playsInline
            className="video-playback"
          />
        </section>
        <section className="vpu-future">
          <div>
            <h3>VPU, the Future is in</h3>
            <h6>
              With the latest VPU tech, a better experience is provided
              -mellower taste, longer usage lifespan and safer vape. Let's quest
              for the future!
            </h6>
          </div>
          <div className="vpu-future-images">
            <img src={images.vpuDevice1} alt="device" />
            <img src={images.vpuDevice2} alt="device" />
            <img src={images.vpuDevice3} alt="device" />
            <img src={images.vpuDevice4} alt="device" />
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Vpu;
