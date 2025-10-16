import React from "react";
import { Row, Col } from "react-bootstrap";
import { images } from "../assets/images";

const Blogs = () => {
  // Blog data array
  const blogData = [
    {
      id: 1,
      image: images.card1,
      date: "December 17, 2022",
      title: "Try these new fruit liquids",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec…",
    },
    {
      id: 2,
      image: images.card2,
      date: "December 17, 2022",
      title: "Weed vapes with vitamins E",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem…",
    },
    {
      id: 3,
      image: images.card3,
      date: "December 17, 2022",
      title: "FDA to fruit and mint flavor",
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam…",
    },
  ];

  return (
    <div className="blog_section">
      <div className="bulletHeading">
        <h4 className="title">Blog News</h4>
      </div>
      <h2 className="heading mb-3">Articles About Vaping</h2>
      <Row>
        {blogData.map((blog) => (
          <Col md={4} key={blog.id}>
            <div className="blogCard card mt-3">
              <img src={blog.image} alt={blog.title} className="card-img-top" />
              <div className="card-body">
                <p className="date">{blog.date}</p>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.text}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
