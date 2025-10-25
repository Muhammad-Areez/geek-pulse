import React from 'react';
import warnIcon from '../assets/images/warnIcon.svg';
import { images } from '../assets/images';

const WarningPopUp = ({
  show,
  onHide,
  message,
  backgroundColor = "#100A3E",
  textColor = "#fff",
  width = "1000px",
}) => {
  if (!show) return null;

  return (
    <div
      className='modal-main'
      onClick={onHide}
    >
      <div
        style={{
          backgroundColor,
          color: textColor,
          borderRadius: '20px',
          padding: '20px',
          width: width,
          maxWidth: '90%',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex align-items-center">
          <img src={images.logo}/>
          <div>
            <h4>YOU MUST BE 21+ TO ENTER</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningPopUp;