// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";
// import { images } from "../assets/images";

// gsap.registerPlugin(ScrollTrigger);

// const LogoSec = () => {
//   const sectionRef = useRef(null);
//   const logoRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set(logoRef.current, { scale: 0.3, opacity: 0 });
//       gsap.set(textRef.current, { opacity: 0, y: 80 });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center",
//           once: true,
//         },
//       });

//       tl.to(logoRef.current, {
//         scale: 1.6, 
//         opacity: 1,
//         ease: "power3.out",
//         duration: 2,
//       })
//         // Step 2: Logo smoothly fades away while text fades in
//         .to(
//           logoRef.current,
//           {
//             opacity: 0,
//             scale: 1.8, // grows slightly as it fades out
//             ease: "power3.inOut",
//             duration: 1.2,
//           },
//           "+=0.2"
//         )
//         // Step 3: Text fades in after logo fades out
//         .to(
//           textRef.current,
//           {
//             opacity: 1,
//             y: 0,
//             ease: "power3.out",
//             duration: 1.5,
//           },
//           "-=0.8" // overlaps slightly for smoother transition
//         )
//         // Step 4 (optional): Each word color transition
//         .to(
//           textRef.current.querySelectorAll("span"),
//           {
//             color: "white",
//             stagger: 0.03,
//             ease: "none",
//             duration: 0.6,
//           },
//           "-=0.5"
//         );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const textContent =
//     "Geek Pulse is redefining disposables, merging futuristic technology, premium flavors, and sleek design to ignite the next era of vaping innovation. Driven by curiosity and crafted for those who crave more, our mission is to take vaping beyond the ordinary.";

//   const words = textContent.split(" ").map((word, i) => (
//     <span key={i} className="word">
//       {word}{" "}
//     </span>
//   ));

//   return (
//     <section ref={sectionRef} className="logo-section">
//       <div className="logo-container">
//         <motion.img
//           src={images.matrix}
//           className="matrix-img"
//           alt="Matrix lines"
//           initial={{ scale: 1.2 }}
//           animate={{ scale: [1, 1.1, 1], opacity: [1, 1, 1] }}
//           transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
//         />
//         <img
//           ref={logoRef}
//           src={images.logo}
//           alt="Logo"
//           className="banner-logo"
//         />
//         <h3 ref={textRef}>{words}</h3>
//       </div>
//     </section>
//   );
// };

// export default LogoSec;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
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
          end: "bottom+=250% top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        logoRef.current,
        { scale: 1, opacity: 1 },
        { scale: 5, opacity: 0, ease: "power2.out", duration:2 }
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
    "Geek Pulse is redefining disposables, merging futuristic technology, premium flavors, and sleek design to ignite the next era of vaping innovation. Driven by curiosity and crafted for those who crave more, our mission is to take vaping beyond the ordinary.";

  const words = textContent.split(" ").map((word, index) => (
    <span key={index}>{word} </span>
  ));

  return (
    <section ref={sectionRef} className="logo-section">
      <div className="logo-container">
      <motion.img
          src={images.matrix}
          className="matrix-img"
          alt="Matrix lines"
          initial={{ scale: 1.2 }}
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        />
        <img ref={logoRef} src={images.logo} alt="Logo" className="banner-logo" />
        <h3 ref={textRef}>{words}</h3>
      </div>
    </section>
  );
};

export default LogoSec;