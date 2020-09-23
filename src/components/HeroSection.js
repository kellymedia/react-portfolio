import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { ProjectsButton } from "./ProjectsButton";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Michael Kelly</h1>
      <p>Developer / Designer</p>
      <div className="hero-btns">
        <ProjectsButton
          className="res-btn"
          buttonStyle="res-btn--outline"
          buttonSize="res-btn--large"
        >
          PROJECTS
        </ProjectsButton>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          CONTACT
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
