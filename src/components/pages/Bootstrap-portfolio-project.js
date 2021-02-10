/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../Projects.css";
import CardItem from "../CardItem.js";
import "../CardItem.css";
import Footer from "../Footer";

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>Bootstrap Portfolio</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="assets/bootstrap-portfolio.png"
                alt="portfolio screenshot"
                text="This is a portfolio website built with Bootstrap 4. It is fully responsive and lightweight."
                label="Bootstrap Portfolio"
                path="/bootstrap-portfolio-project"
              />
            </ul>
          </div>
          <h3>Tech used:</h3>
          <p>Bootstrap 4, Javascript</p>
          <br />
          <a
            href="https://github.com/kellymedia/responsive-portfolio"
            className="repo-link"
            target="_blank"
          >
            GitHub Repo
          </a>
          <br />
          <a
            href="https://kellymedia.github.io/bootstrap-portfolio/"
            className="demo-link"
            target="_blank"
          >
            Live Demo
          </a>
          <br />
          <br />
          <h5>
            <a href="/projects" className="return-link">
              Return to Projects
            </a>
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cards;
