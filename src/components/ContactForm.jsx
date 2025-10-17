import React from "react";
import { Row, Col } from "react-bootstrap";
import { images } from "../assets/images";
import { Link } from "react-router-dom";
const ContactForm = () => {
  return (
    <section className="contact_form_section">
      <Row>
        <Col md={6}>
          <h2 className="heading my-3">
            Have questions or need assistance? We're just a message away!
          </h2>
          <p className="title">Contact Info</p>
          <div className="border-bottom my-3"></div>
          <div className="contactBox">
            <div className="contactInfo d_flex mb-4">
              <div className="contactIcon d_flex">
                <img src={images.phoneIcon} />
              </div>
              <div className="contactText text-start">
                <h5>Phone Number</h5>
                <Link to="tel:8888416566">888-841-6566</Link>
              </div>
            </div>
            <div className="contactInfo d_flex">
              <div className="contactIcon d_flex">
                <img src={images.mailIcon} />
              </div>
              <div className="contactText">
                <h5>Email Address</h5>
                <Link to="mailto:test@example.com">test@example.com</Link>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <form className="contact-form mx-5 my-3">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Your Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label htmlFor="floatingInput">Subject</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="floatingTextarea"
                style={{ height: "120px" }}
              ></textarea>
              <label htmlFor="floatingTextarea">Message</label>
            </div>
            <button className="cta">Send</button>
          </form>
        </Col>
      </Row>
    </section>
  );
};

export default ContactForm;
