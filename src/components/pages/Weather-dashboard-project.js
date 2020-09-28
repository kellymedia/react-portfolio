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
        <h1>Weather Dashboard App</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="assets/weather-dashboard.png"
                alt="weather dashboard screenshot"
                text="This app allows the user to search for current weather conditions by city names. The current conditions are displayed at the top of the results, and the 5-day forecast is displayed below it."
                label="Weather Dashboard App"
                path="/weather-dashboard-project"
              />
            </ul>
          </div>
          <h3>Tech used:</h3>
          <p>Moment.js, OpenWeather API, AJAX, Bootstrap, JavaScript</p>
          <br />
          <a
            href="https://github.com/kellymedia/weather-forecast-dashboard"
            className="repo-link"
            target="_blank"
          >
            GitHub Repo
          </a>
          <br />
          <a
            href="https://kellymedia.github.io/weather-forecast-dashboard/"
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
