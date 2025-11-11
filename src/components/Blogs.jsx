import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import blogData from "../data/blogData";

const Blogs = () => {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1], 
      },
    },
  };

  return (
    <div className="blog_section">
      <div className="bulletHeading">
        <h4 className="title">Blog News</h4>
      </div>
      <h2 className="heading mb-3">Articles About Vaping</h2>

      <Row>
        {blogData.map((blog, index) => (
          <Col md={4} sm={6} key={blog.id} className="mb-3">
            <motion.div
              className="blogCard card mt-3"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              transition={{ delay: index * 0.2 }}
              onClick={() => navigate(`/blogs/${blog.id}`)}
            >
              <img src={blog.image} alt={blog.title} className="card-img-top" loading="lazy" />
              <span className="tags tag1">Trend</span>
              <span className="tags tag2">Vaping</span>
              <div className="card-body">
                <p className="date">{blog.date}</p>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.text}</p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
