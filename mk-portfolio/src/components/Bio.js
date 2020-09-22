import React from "react";
import "../App.css";
import "./Bio.css";
import { Resume } from "./Resume";

function Bio() {
  return (
    <div className="bio-container">
      <h2>Endless Creativity</h2>
      <p>
        My skills and my experience are very unique. My background has provided
        me opportunities to learn effective problem solving, strong
        communication, and inclusive perspective.{" "}
      </p>
      <div className="bio-btns">
        <Resume
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          RESUME
        </Resume>
      </div>
    </div>
  );
}

export default Bio;
