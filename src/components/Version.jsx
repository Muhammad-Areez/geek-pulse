import { images } from "../assets/images";
const Version = ({
  cosmosEdition = false,
  featureColor = "#8085ff",
  showContext = true,
  features = [
    { icon: images.versionIcon1, text: "VPU Inside" },
    { icon: images.versionIcon2, text: "Dual Mesh Coil" },
    { icon: images.versionIcon3, text: "Dual Core" },
    { icon: images.versionIcon4, text: "Regular 40K<br />Pulse Mode 30K" },
    { icon: images.versionIcon5, text: "50 ML" },
    { icon: images.versionIcon6, text: "5% Nicotine" },
    { icon: images.versionIcon7, text: "Quick Charge" },
  ],
}) => {
  return (
    <section className="version_section">
      {showContext && (
        <div className="context">
          <div className="d_flex">
            <h2 className="heading">Ultra</h2>
            <img src={images.Xicon} alt="X icon" />
            <h2 className="heading">Version</h2>
          </div>
        </div>
      )}
      {
        cosmosEdition && (
          <div className="cosmos-version">
            <h3>ULTRA <span>2.0</span> VERSION</h3>
          </div>
        )
      }

      <div className="version_details">
        {features.map((item, index) => (
          <div className="features" key={index}>
            <div className="d_flex icons" style={{ background: featureColor }}>
              <img src={item.icon} alt={item.text} />
            </div>
            <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Version;
