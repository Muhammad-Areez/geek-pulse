import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../assets/images";
gsap.registerPlugin(ScrollTrigger);

const ContentSec = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: "words" });

    gsap.fromTo(
      split.words,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: false,
        },
      }
    );

    return () => split.revert();
  }, []);

  return (
    <section className="logo-section content-section">
      <div className="logo-container">
        <img src={images.matrix} className="matrix-img" />

        <p ref={textRef} className="content-text">
          Lorem ipsum dolor sit amet consectetur. Commodo ac ullamcorper
          lobortis in ultrices sed sapien nisl varius. Ut risus lorem
          pellentesque orci massa dolor faucibus viverra viverra. Nisi fermentum
          risus elit lorem faucibus magna. Mattis tellus pulvinar tincidunt nec
          eget mauris et. Proin dolor lectus metus turpis nec. Et risus placerat
          tempus amet nisl. Nec sit risus curabitur pellentesque.
        </p>
      </div>
    </section>
  );
};

export default ContentSec;
