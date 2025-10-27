import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/Warning";
import Header from "../components/Header";
import { images } from "../assets/images";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { apiHelper } from "../services";
import { toast } from "react-toastify";
import { CountryDropdown } from "react-country-region-selector";

function Wholesaler() {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    streetLine1: "",
    streetLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    estimatedMonthlyPurchases: "",
    website: ""
  })

  const submitWholeSale = async (e) => {
    e.preventDefault()
    setLoading(false)
    const {response, error } = await apiHelper("POST", '/wholesale/inquiry',{}, values)
    if(response){
      setLoading(false)
      toast.success(response.data.message)
    }else{
      setLoading(false)
      toast.error(error)
    }
  }

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
          <form className="contact-form mx-5 my-3" onSubmit={submitWholeSale}>
            <p className="title mb-2">Contact Info</p>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" value={values.name} onChange={(e) => setValues({...values, name: e.target.value})} required/>
              <label htmlFor="floatingInput">Name*</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" value={values.email} onChange={(e) => setValues({...values, email: e.target.value})} required/>
              <label htmlFor="floatingInput">Email*</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" value={values.phone} onChange={(e) => setValues({...values, phone: e.target.value})} required/>
              <label htmlFor="floatingInput">Phone Number*</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" value={values.website} onChange={(e) => setValues({...values, website: e.target.value})} />
              <label htmlFor="floatingInput">Website</label>
            </div>
            <p className="title mb-2">Business Info</p>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" value={values.companyName} onChange={(e) => setValues({...values, companyName: e.target.value})} required/>
              <label htmlFor="floatingInput">Company Name*</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" value={values.streetLine1} onChange={(e) => setValues({...values, streetLine1: e.target.value})} required/>
              <label htmlFor="floatingInput">Street Line 1*</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" value={values.streetLine2} onChange={(e) => setValues({...values, streetLine2: e.target.value})} required/>
              <label htmlFor="floatingInput">Street Line 2</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" value={values.city} onChange={(e) => setValues({...values, city: e.target.value})} required/>
              <label htmlFor="floatingInput">City*</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" value={values.state} onChange={(e) => setValues({...values, state: e.target.value})} required/>
              <label htmlFor="floatingInput">State*</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" value={values.postalCode} onChange={(e) => setValues({...values, postalCode: e.target.value})} required/>
              <label htmlFor="floatingInput">Postal / Zip Code*</label>
            </div>
            <div className="form-floating mb-3">
              <CountryDropdown
                value={values.country}
                onChange={(val) => setValues({...values, country: val})}
                className="form-control"
                id="floatingInput"
                required
              />
              <label htmlFor="floatingInput">Country*</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" value={values.estimatedMonthlyPurchases} onChange={(e) => setValues({...values, estimatedMonthlyPurchases: e.target.value})} required/>
              <label htmlFor="floatingInput">
                Estimated Monthly Purchases (e.g. 1000 USD or 2000 GBP)*
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
