import React from "react";
import { images } from "../assets/images";

const Version = () => {
  const versionFeatures = [
    { icon: images.versionIcon1, text: "VPU Inside" },
    { icon: images.versionIcon2, text: "Dual Mesh Coil" },
    { icon: images.versionIcon3, text: "Dual Core" },
    { icon: images.versionIcon4, text: "Regular 40K Puffs" },
    { icon: images.versionIcon5, text: "50 ML" },
    { icon: images.versionIcon6, text: "5% Nicotine" },
    { icon: images.versionIcon7, text: "Quick Charge" },
  ];

  return (
    <section className="version_section">
      <div className="context">
        <div className="d_flex">
          <h2 className="heading">Ultra</h2>
          <img src={images.Xicon} alt="X icon" />
          <h2 className="heading">Version</h2>
        </div>
      </div>

      <div className="version_details">
        {versionFeatures.map((item, index) => (
          <div className="features" key={index}>
            <div className="d_flex icons">
              <img src={item.icon} alt={item.text} />
            </div>
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Version;
