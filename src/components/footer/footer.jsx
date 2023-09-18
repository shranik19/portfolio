import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a
        href="#header"
        className="footer__logo"
        data-aos="fade-in"
        data-aos-duration="2800"
      >
        SHRANIK
      </a>

      <ul className="permalinks">
        <li>
          {" "}
          <a href="#header">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/shranik.sangat.5/"
          data-aos="fade-up-right"
          data-aos-duration="1800"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/shra.nik/"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <BsInstagram />
        </a>
        <a
          href="https://github.com/shranik19"
          data-aos="fade-up-left"
          data-aos-duration="1800"
        >
          <BsGithub />{" "}
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Designed by EGATOR</small>
      </div>
    </footer>
  );
};

export default footer;
