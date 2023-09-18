import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Ward Application",
    description:
      "Ward application that allows you to read and download notice/events and provides info to navigate ward and also with a admin panel(laravel)",
    github: "https://github.com/shranik19/e-gov-Ward-notice-raodmap-",
    demo: null,
  },
  {
    id: 2,
    image: IMG2,
    title: "Weather Application",
    description: "Done using core js: displays weather info",
    github: "https://github.com/shranik19/weather-app-",
    demo: "https://weather-app-five-phi-35.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Grocery Store",
    description: "An e-commerce website (laravel)",
    github: "https://github.com/shranik19/e-commerce",
    demo: null,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 data-aos="zoom-in-up">My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio__item" data-aos="fade-right">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{description}</h5>

              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                {demo !== null ? (
                  <a href={demo} className="btn btn-primary" target="__blank">
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
