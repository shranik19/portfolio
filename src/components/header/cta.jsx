import React from "react";
import cv from "../../assets/portcv.jpg";
const cta = () => {
  return (
    <div className="cta">
      <a
        href={cv}
        className="btn"
        download
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Download
      </a>
      <a
        href="#contact"
        className="btn btn-primary"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        let's have a chat
      </a>
    </div>
  );
};

export default cta;
