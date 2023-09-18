import React from "react";
import { useEffect } from "react";
import "./about.css";
import { FaPhp } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { BiLogoNodejs } from "react-icons/bi";
import { SiReact } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="about">
      <div className="container about__container">
        <h5 data-aos="zoom-in-down" data-aos-duration="700">
          Know More{" "}
        </h5>
        <h2 data-aos="zoom-in-up" data-aos-duration="1000">
          About Me
        </h2>
        <div className="about__content">
          <p data-aos="zoom-out" data-aos-duration="1000">
            I'm an undergraduate student with a keen ambition to forge a career
            in full-stack development. My journey into the world of web
            development has been an exciting one, marked by a strong
            determination to acquire a wide range of skills. Currently, I'm
            diving deep into technologies like Node.js, with a particular focus
            on honing my expertise in backend development.My goal is to become a
            versatile full-stack developer, creating comprehensive web
            solutions.
          </p>

          <div className="skills">
            <h2>Skills</h2>
          </div>
          <div className="cards">
            <div
              className="about__cards "
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <article className="about__card">
                <SiHtml5 className="about__icon" />
                <h5>HTML</h5>
              </article>

              <article className="about__card">
                <SiCss3 className="about__icon" />
                <h5>CSS</h5>
              </article>

              <article className="about__card">
                <SiJavascript className="about__icon" />
                <h5>Javascript</h5>
              </article>

              <article className="about__card">
                <SiReact className="about__icon" />
                <h5>React</h5>
              </article>

              <article className="about__card">
                <BiLogoNodejs className="about__icon" />
                <h5>Node Js</h5>
              </article>

              <article className="about__card">
                <FaPhp className="about__icon" />
                <h5>PHP</h5>
              </article>

              <article className="about__card">
                <FaLaravel className="about__icon" />
                <h5>Laravel</h5>
              </article>
              <article className="about__card">
                <SiMysql className="about__icon" />
                <h5>Mysql</h5>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
