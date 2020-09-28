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
        <h1>Horiseon Refactor</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="assets/horiseon-refactor.png"
                alt="Horiseon screenshot"
                text="This is a code refactor solution for an agency website."
                label="Code Refactor"
                path="/code-refactor-project"
              />
            </ul>
          </div>
          <h3>Tech used:</h3>
          <p>HTML5, CSS</p>
          <br />
          <a
            href="https://github.com/kellymedia/horiseon-agency-code-refactor"
            className="repo-link"
            target="_blank"
          >
            GitHub Repo
          </a>
          <br />
          <a
            href="https://kellymedia.github.io/horiseon-agency-code-refactor/"
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
