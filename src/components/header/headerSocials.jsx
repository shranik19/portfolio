import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const headerSocials = () => {
  return (
    <div className="header__Socials">
      <a
        href="https://www.linkedin.com/in/shramiksangat/"
        target="blank"
        data-aos="fade-down"
        data-aos-duration="2400"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/shranik19"
        data-aos="fade-down"
        data-aos-duration="1800"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/shranik.sangat.5/"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default headerSocials;
