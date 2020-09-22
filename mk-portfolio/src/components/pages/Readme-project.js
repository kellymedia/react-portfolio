import React from "react";
import "../Projects.css";
import CardItem from "../CardItem.js";
import "../CardItem.css";
import Footer from "../Footer";

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>README.md Generator</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/node-generator.png"
                alt="node screenshot"
                text="Create a README.md file using Node.js. A user will be given several questions and prompts, and a new file will be dynamically generated."
                label="Node"
                path="/readme-project"
              />
            </ul>
          </div>
          <h3>Tech used:</h3>
          <p>Node.js, Javascript</p>
          <br />
          <a
            href="https://github.com/kellymedia/node-readme-generator"
            className="repo-link"
          >
            GitHub Repo
          </a>
          <br />
          <a
            href="https://drive.google.com/file/d/1mu1BhJ9Ivs2hHOi6RxQoTLWZfFdT3Zk6/view"
            className="demo-link"
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
