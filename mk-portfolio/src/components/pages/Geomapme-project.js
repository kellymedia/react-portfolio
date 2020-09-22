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
        <h1>geoMapMe App</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/geoMapMe.png"
                alt="geoMapMe screenshot"
                text="Mapping app for users to mark their favorite locations using device location data. Users can share their name a message about their marker."
                label="geoMapMe App"
                path="/geomapme-project"
              />
            </ul>
          </div>
          <h3>Tech used:</h3>
          <p>Node.js, Handlebars.js, MySQL, Mapbox GL JS</p>
          <br />
          <a
            href="https://github.com/kellymedia/geoMap-Me"
            className="repo-link"
            target="_blank"
          >
            GitHub Repo
          </a>
          <br />
          <a 
            href="https://geomap-me.herokuapp.com/" 
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
