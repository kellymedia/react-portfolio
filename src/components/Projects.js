import React from "react";
import "./Projects.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Click on a project to learn more.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/geoMapMe.png"
              alt="geoMapMe screenshot"
              text="Mapping app for users to mark their favorite locations using device location data."
              label="geoMapMe App"
              path="/geomapme-project"
            />
            <CardItem
              src="images/node-generator.png"
              alt="node-readme screenshot"
              text="README.md generator using Node.js CLI."
              label="README.md Generator"
              path="readme-project"
            />
            <CardItem
              src="images/find-and-dine.png"
              alt="find-and-dine screenshot"
              text="Recipe finder app using public recipe and nutrition APIs."
              label="Find & Dine App"
              path="/find-and-dine-project"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/bootstrap-portfolio.png"
              alt="portfolio screenshot"
              text="Portfolio site built with Bootstrap 4."
              label="Bootstrap Portfolio"
              path="/bootstrap-portfolio-project"
            />
            <CardItem
              src="images/weather-dashboard.png"
              alt="weather dashboard screenshot"
              text="Multi-city weather forecast app using public weather data API. "
              label="Weather Dashboard"
              path="/weather-dashboard-project"
            />
            <CardItem
              src="images/horiseon-refactor.png"
              alt="refactor screenshot"
              text="HTML & CSS refactoring example."
              label="Code Refactor"
              path="/code-refactor-project"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
