import React from "react";
import { Row, Col } from "react-bootstrap";
import { images } from "../assets/images";

const AboutCard = () => {
  const cards = [
    {
      id: 1,
      image: images.about1,
      title: "TECHNOLOGY DEVELOPMENT",
      text: "Materials Research Atomization Technology Research Advanced Technology Research",
    },
    {
      id: 2,
      image: images.about2,
      title: "AEROSOL RESEARCH",
      text: "Harmful Constituents Analysis Deposition of Aerosol in Lungs",
    },
    {
      id: 3,
      image: images.about3,
      title: "TOXICOLOGICAL TESTING",
      text: "In Vitro Toxicological Testing In Vivo Toxicological Testing",
    },
    {
      id: 4,
      image: images.about4,
      title: "CLINICAL TRIALS",
      text: "Behavioral Study Pharmacokinetic Study Abuse/Addiction Analysis",
    },
    {
      id: 5,
      image: images.about5,
      title: "LONG-TETM ASSESSMENT",
      text: "The Impact of Products on Population Health Long-term Tracking of Customer Usage",
    },
  ];

  return (
    <div className="aboutWrapper d_flex">
      {cards.map((card) => (
        <div key={card.id} className="mb-4">
          <div className="aboutCard">
            <img src={card.image} alt={card.title} className="aboutbg" />
            <p className="title">
              {card.title.split(" ").map((word, i) => (
                <span key={i} style={{ display: "block" }}>
                  {word}
                </span>
              ))}
            </p>
            <p className="para">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCard;
