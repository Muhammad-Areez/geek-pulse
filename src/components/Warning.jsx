import React from "react";
import warnIcon from "../assets/images/warnIcon.svg";

const Warning = ({
  backgroundColor = "#8186FF",
  textColor = "#fff",
  message,
}) => {
  return (
    <section
      className="d_flex warningSection "
      style={{
        backgroundColor,
      }}
    >
      <img src={warnIcon} alt="Warning Icon" />
      <p className="warningText" style={{ color: textColor, margin: 0 }}>
        {message ||
          "Warning: This product contains nicotine. Nicotine is an addictive chemical."}
      </p>
    </section>
  );
};

export default Warning;
