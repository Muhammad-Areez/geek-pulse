import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import retro from "../assets/images/Retro-editions.png";
import frozen from "../assets/images/Frozen-editions.png";
import seasonal from "../assets/images/Seasonal-editions.png";
import basic from "../assets/images/Basic-editions.png";
import cosmo from "../assets/images/Cosmo-editions.png";
import smoothie from "../assets/images/Smoothie-editions.png";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState(false)
  const [productToggle, setProductToggle] = useState(false)

  const toggleMenu = () => {
    setHamburgerToggle((prev) => !prev)
  }

  const toggleProductMenu = (e) => {
    e.preventDefault()
    setProductToggle((prev) => !prev)
  }


  return (
    <header className="main-header d_flex">
      <div className="header-content">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div class={`menu-Bar ${hamburgerToggle ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-wrap ${hamburgerToggle ? 'open' : ''}`}>
          {
            hamburgerToggle && (
              <img src={logo} alt="logo" className="logo" />
            )
          }
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <Link to="/vpu">VPU</Link>
            <Link to="#products" onClick={toggleProductMenu}>Products</Link>
            <div className={`product-edition-inner ${productToggle ? 'open' : ''}`}>
              <Link to="/retro-edition">-  Retro Edition</Link>
              <Link to="/frozen-edition">-  Frozen Edition</Link>
              <Link to="/seasonal-edition">-  Seasonal Edition</Link>
              <Link to="/basic-edition">-  Basic Edition</Link>
              <Link to="/cosmos-edition">-  Cosmos Edition</Link>
              <Link to="/smoothie-edition">-  Smoothie Edition</Link>
            </div>
            <Link to="/wholesaler">Wholesale</Link>
            <Link to="/contact-us">Contact Us</Link>
          </nav>
          <div className="header-products">
            <Row>
              <Col md={2}>
                <Link to="/retro-edition">
                  <img
                    src={retro}
                    alt="product-card"
                    className="header-product-img"
                  />
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/frozen-edition">
                  <img
                    src={frozen}
                    alt="product-card"
                    className="header-product-img"
                  />
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/seasonal-edition">
                  <img
                    src={seasonal}
                    alt="product-card"
                    className="header-product-img"
                  />
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/basic-edition">
                  <img
                    src={basic}
                    alt="product-card"
                    className="header-product-img"
                  />
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/cosmos-edition">
                  <img
                    src={cosmo}
                    alt="product-card"
                    className="header-product-img"
                  />
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/smoothie-edition">
                  <img
                    src={smoothie}
                    alt="product-card"
                    className="header-product-img"
                  />
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
