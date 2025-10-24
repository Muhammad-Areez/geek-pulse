import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/Warning";
import Header from "../components/Header";
import { images } from "../assets/images";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Wholesaler() {
  return (
    <>
      <section className=" position-relative">
        <Warning borderRadius="0px"/>
        <Header />
        <section className="logo-section contactus_section wholesalerSection">
          <div className="logo-container">
            <motion.img
              src={images.matrix2}
              className="matrix-img"
              alt="Matrix lines"
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.8, 0.8, 0.6],
                rotate: [0, 0.2, 0],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
          <h3 className="contact_heading">Become A Wholesaler </h3>
        </section>
        <div className="wholesaleForm">
          <form className="contact-form mx-5 my-3">
            <p className="title mb-2">Contact Info</p>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Phone Number</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Website</label>
            </div>
            <p className="title mb-2">Business Info</p>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Company Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Street Line 1</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Street Line 2</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">City</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">State</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Postal / Zip Code</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Country</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">
                Estimated Monthly Purchases (e.g. 1000 USD or 2000 GBP)
              </label>
            </div>

            <button className="cta mb-3">Submit</button>
          </form>
        </div>
      </section>
      <Container>{/* <ContactForm /> */}</Container>

      <Footer />
    </>
  );
}

export default Wholesaler;
