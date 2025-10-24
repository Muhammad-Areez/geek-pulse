import { Col, Container, Row } from "react-bootstrap";
import { images } from "../assets/images";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const Footer = ({ isHomePage = false, background = "#100a3e" }) => {
  return (
    <Container
      className={`footer-main ${!isHomePage && "footer-main-sec"}`}
      style={{ background: background }}
    >
      <motion.img
        src={images.matrix}
        className="matrix-img"
        alt="Matrix lines"
        initial={{ scale: 2 }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [1, 1.2, 1.5],
          rotate: [0, 0.2, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <Row className="footer-row">
        <Col md={5} className="column">
          <div className="footer-logo-div">
            <img src={images.logo} className="footer-logo" />
            <h5>Copyright © Geek Pulse | All Rights Served</h5>
            <ul>
              <li>
                <Link>
                  <img src={images.facebook} />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={images.twitter} />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={images.instagram} />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={images.linkedin} />
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={2}>
          <div className="footer-links-div">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to={'/about-us'}>About Us</Link>
              </li>
              <li>
                <Link to={'/vpu'}>VPU</Link>
              </li>
              <li>
                <Link to={'/wholesaler'}>WholeSale</Link>
              </li>
              {/* <li>
                <Link>Products</Link>
              </li>
              <li>
                <Link>Licenses</Link>
              </li>
              <li>
                <Link>Changelog</Link>
              </li> */}
            </ul>
          </div>
        </Col>
        <Col md={2}>
          <div className="footer-links-div">
            <h4>Product Links</h4>
            <ul>
              <li>
                <Link to={'/retro-edition'}>Retro Edition</Link>
              </li>
              <li>
                <Link to={'/smoothie-edition'}>Smoothie Edition</Link>
              </li>
              <li>
                <Link to={'/frozen-edition'}>Frozen Edition</Link>
              </li>
              <li>
                <Link to={'/cosmos-edition'}>Cosmo Edition</Link>
              </li>
              <li>
                <Link to={'/basic-edition'}>Basic Edition</Link>
              </li>
              <li>
                <Link to={'/seasonal-edition'}>Seasonal Edition</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={3}>
          <div className="footer-links-div">
            <h4>Contact us</h4>
            <ul>
              <li>
                <p>Write us an email</p>
                <a href="#">contact@geekpulse.com</a>
              </li>
              <li>
                <p>Give us a call</p>
                <a href="#">(123) 456 - 7890</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="footer_bottom">
        <Col lg={6}>
          <h3>Subscribe to get 10% OFF on your first order!</h3>
        </Col>
        <Col lg={6}>
          <div className="search-div">
            <div className="searchField">
              <input type="search" placeholder="Enter your email" />
              <button
                className="cta"
                style={{
                  background: background !== "#100a3e" ? "#55BD04" : "#8186FF",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
