import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqsData = [
    {
      question: "How to become your Wholesaler?",
      answer: (
        <>
          Please fill out our contact form or email{" "}
          <a href="mailto:sales@geekPULSE.com">sales@geekPULSE.com</a>.
        </>
      ),
    },
    {
      question: "How can I purchase your products?",
      answer: (
        <>
          Please fill out our <Link to="/contact-us">contact form</Link>. Someone
          will get back to you and help you ASAP.
        </>
      ),
    },
    {
      question: "What is Geek Pulse?",
      answer: (
        <>
          Geek Pulse is redefining disposables, merging futuristic
          technology, premium flavors, and sleek design
          to ignite the next era of vaping innovation. Driven by curiosity and
          crafted for those who crave more, our mission is to take vaping beyond
          the ordinary.
        </>
      ),
    },
    {
      question: "How long Geek Pulse lasts?",
      answer: (
        <>
          It depends on how heavily and how often you use it. But GEEK PULSE
          lasts longer than most disposable e-cigarette PULSEs / sticks in the
          market. Because GEEK PULSE has at least 575 puffs, which is 90% more
          than other disposable e-cigarette PULSEs / sticks in the market.
        </>
      ),
    },
    {
      question: "What is the minimum age to buy Geek Pulse?",
      answer: (
        <>
          You must be of legal smoking age in your state / country to purchase a
          GEEK PULSE.
        </>
      ),
    },
    {
      question: "How to know when my Geek Pulse is empty?",
      answer: (
        <>
          When you cannot puff out anything, it is empty. But the last draw will
          not taste burnt at all, as our GEEK PULSE is consistent from beginning
          to end.
        </>
      ),
    },
  ];

  return (
    <section className="faqs_section">
      <h2 className="heading text-center mb-4">Frequently Asked Questions</h2>

      <div className="faq_wrapper">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`faq_item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="faq_question">
              <h5>{faq.question}</h5>
              <FaChevronDown
                className={`icon ${activeIndex === index ? "rotate" : ""}`}
              />
            </div>

            <div
              className="faq_answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0",
                opacity: activeIndex === index ? "1" : "0",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
