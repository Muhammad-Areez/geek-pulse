import React from 'react';
import { images } from '../assets/images';
import { motion } from "framer-motion";

const WarningPopUp = ({
  show,
  onYes,
  onNo,
  message,
  backgroundColor = "#100A3E",
  textColor = "#fff",
  width = "1000px",
}) => {
  if (!show) return null;

  return (
    <div
      className='modal-main'
      onClick={onNo}
    >
      <div
        className='modal-wrapper'
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popup-main">
          <motion.img
            src={images.matrix}
            className="matrix-img"
            alt="Matrix lines"
            initial={{ scale: 1.2 }}
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <img src={images.logo} className='popup-logo' />
          <div>
            <h4>YOU MUST BE 21+ TO ENTER</h4>
          </div>
          <div className='pop-btn-main'>
            <button onClick={onYes}>
              Yes, I am
            </button>
            <button onClick={onNo}>
              I am not
            </button>
          </div>
          <div className='pop-para'>
            <p>By clicking yes you also confirm that you have read and agree to Geek Pulse’s Terms of Service and Privacy Policy and Geek Pulse’s service provider’s terms of service and privacy policy.</p>
          </div>
          <img src={images.warnIcon} alt="warn-icon" className='pop-warn-icon' />
        </div>
      </div>
    </div>
  );
};

export default WarningPopUp;