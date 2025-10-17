import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

const LogoSec = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { opacity: 0, y: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: "bottom+=200% top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        logoRef.current,
        { scale: 1, opacity: 1 },
        { scale: 3, opacity: 0, ease: "power2.out", duration:2 }
      );

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power2.out"}
      );

      tl.to(
        textRef.current.querySelectorAll("span"),
        { color: "white", stagger: 0.05, ease: "none" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const textContent =
    "Lorem ipsum dolor sit amet consectetur. Commodo ac ullamcorper lobortis in ultrices sed sapien nisl varius. Ut risus lorem pellentesque orci massa dolor faucibus viverra viverra. Nisi fermentum risus elit lorem faucibus magna. Mattis tellus pulvinar tincidunt nec eget mauris et. Proin dolor lectus metus turpis nec. Et risus placerat tempus amet nisl. Nec sit risus curabitur pellentesque.";

  const words = textContent.split(" ").map((word, index) => (
    <span key={index}>{word} </span>
  ));

  return (
    <section ref={sectionRef} className="logo-section">
      <div className="logo-container">
        <img src={images.matrix} className="matrix-img" alt="Matrix" />
        <img ref={logoRef} src={images.logo} alt="Logo" className="banner-logo" />
        <h3 ref={textRef}>{words}</h3>
      </div>
    </section>
  );
};

export default LogoSec;