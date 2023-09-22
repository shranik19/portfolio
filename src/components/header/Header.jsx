import React from "react";
import "./header.css";
import CTA from "./cta";
import HeaderSocial from "./headerSocials";
import ME from "../../assets/me.png";
import Hello from "../../assets/hello.png";
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5 data-aos="fade-up-right" data-aos-duration="1500">
          Hello I'm
        </h5>
        <h1 data-aos="fade-in-out" data-aos-duration="2500">
          Shramik Sangat
        </h1>
        <h5
          className="text-light"
          data-aos="fade-up-left"
          data-aos-duration="1500"
        >
          Web Developer
        </h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
          <img src={Hello} alt="" className="hello" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
