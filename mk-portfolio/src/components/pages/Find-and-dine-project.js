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
        <h1>Find & Dine App</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/find-and-dine.png"
                alt="find-and-dine screenshot"
                text="This web app provides recipe ideas for users based on the ingredients they want to use. A user can enter their ingredients in the search field to find recipe ideas for their meal."
                label="Find & Dine App"
                path="/find-and-dine-project"
              />
            </ul>
          </div>
          <h3>Tech used:</h3>
          <p>Materialize CSS, jQuery, Pexels API, Edamam API</p>
          <br />
          <a
            href="https://github.com/kellymedia/find-and-dine"
            className="repo-link"
            target="_blank"
          >
            GitHub Repo
          </a>
          <br />
          <a
            href="https://kellymedia.github.io/find-and-dine/"
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
