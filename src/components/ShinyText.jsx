import React from "react";

const ShinyText = ({ text, disabled = false, speed = 4, className = "" }) => {
  return (
    <div
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      data-text={text}
      style={{ "--shine-speed": `${speed}s` }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
