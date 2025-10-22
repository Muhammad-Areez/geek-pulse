import React from "react";
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
  return (
    <header className="main-header d_flex">
      {/* <img src={shadow} alt="Shadow" className="header-shadow" />
      <img src={matrix} alt="Matrix" className="header-matrix" /> */}
      <div className="header-content">
        <img src={logo} alt="logo" className="logo" />
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#vpu">VPU</a>
          <a href="#products">Products</a>
          <a href="#wholesale">Wholesale</a>
        </nav>
        <div className="header-products">
            <Row>
              <Col md={2}>
                <Link to="/retro-edition">
                  <img src={retro} alt="product-card" className="header-product-img" />
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/frozen-edition">
                  <img src={frozen} alt="product-card" className="header-product-img" />
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/seasonal-edition">
                  <img src={seasonal} alt="product-card" className="header-product-img" />
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/basic-edition">
                  <img src={basic} alt="product-card" className="header-product-img" />
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/cosmos-edition">
                  <img src={cosmo} alt="product-card" className="header-product-img" />
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/smoothie-edition">
                  <img src={smoothie} alt="product-card" className="header-product-img" />
                </Link>
              </Col>
            </Row>
          </div>
      </div>
    </header>
  );
};

export default Header;
