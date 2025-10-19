import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  enableBlur = true,
  baseOpacity = 0,
  baseRotation = 2,
  blurStrength = 6,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const wordElements = el.querySelectorAll(".word");

    // Timeline for smoother control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%", // when 80% of viewport height reached
        toggleActions: "play none none none", // play once
      },
    });

    // Slight rotation
    tl.fromTo(
      el,
      { rotate: baseRotation, transformOrigin: "0% 50%" },
      { rotate: 0, ease: "power2.out", duration: 0.8 }
    );

    // Word fade + blur reveal
    tl.fromTo(
      wordElements,
      {
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : "none",
        y: 15,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        ease: "power2.out",
        duration: 1,
        stagger: 0.06, // smooth word-by-word reveal
      },
      "-=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [enableBlur, baseOpacity, baseRotation, blurStrength]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
