import { Container, Row, Col } from "react-bootstrap";
import Warning from "../components/Warning";
import Header from "../components/Header";
import { images } from "../assets/images";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Faqs from "../components/Faqs";
import Blogs from "../components/Blogs";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find(b => b.id === parseInt(id));
  return (
    <>
      <section className="blogsBanner position-relative">
        <Warning borderRadius="0px" />
        <Header />
        <section className="logo-section contactus_section">
          <div className="logo-container">
            <motion.img
              src={blog.bannerImage}
              className="matrix-img"
              alt="Blog Banner"
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.4, 1],
                // opacity: [0.8, 0.8, 0.6],
                rotate: [0, 0.2, 0],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            {/* <h3 className="contact_heading">Blogs</h3> */}
          </div>
        </section>
      </section>
      <Container>
        <section className="blogsContent">
          <Row>
            <Col md={6} lg={6} className="blog-details-col">
              <h2 className="blog-title">
                {blog.content[0]?.text || 'Blog Title'}
              </h2>

              <h3 className="blog-subheading mb-2">{blog.content[1]?.text || 'Subheading'}</h3>

              <p className="blog-paragraph">
                {blog.content[2]?.text || 'Paragraph content'}
              </p>
            </Col>
            <Col md={6} lg={6} className="blog-details-col">
              <p className="blog-paragraph">
                {blog.content[3]?.text || 'Second paragraph'}
              </p>
              <p className="blog-paragraph">
                {blog.content[4]?.text || 'Third paragraph'}
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6} lg={6} className="blog-details-col">
              <img src={blog.content[5]?.src || images.about1} alt="" className="blogCol_img mb-2" />
            </Col>
            <Col md={6} lg={6} className="blog-details-col">
              <h2 className="blog-title">
                {blog.content[6]?.text || 'Second Title'}
              </h2>{" "}
              <p className="blog-paragraph">
                {blog.content[7]?.text || 'Fourth paragraph'}
              </p>
              <p className="blog-paragraph">
                {blog.content[8]?.text || 'Fifth paragraph'}
              </p>
            </Col>
          </Row>
        </section>
      </Container>

      <Footer />
    </>
  );
}

export default BlogDetails;
