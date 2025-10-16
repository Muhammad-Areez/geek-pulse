import React from "react";
import shadow from "../assets/images/shadow.svg";
import matrix from "../assets/images/matrix.svg";
import logo from "../assets/images/logo.svg";
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
      </div>
    </header>
  );
};

export default Header;
