import React from "react";
import "../App.css";
import "./Mail.css";
import { Link } from "react-router-dom";

function Mail() {
  return (
    <div className="mail-container">
      <h2>Hello World!</h2>
      <p>Are you interested in collaborating?</p>
      <p>Please send me an email or call me.</p>
      <div className="row">
        <div className="column">
          <p>
            <a href="mailto:michael@kelly.media" className="envelope">
              <i className="far fa-envelope fa-3x envelope"></i>
            </a>
          </p>
        </div>
        <div className="column">
          <p>
            <a href="tel:541-203-0711" className="phone">
              <i className="fas fa-mobile-alt fa-3x"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="contact-social-icons">
        <Link
          className="contact-social-icon-link linkedin"
          to={{ pathname: "https://www.linkedin.com/in/michael-kelly-media/" }}
          target="_blank"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin" />
        </Link>
        <Link
          className="contact-social-icon-link github"
          to={{ pathname: "https://github.com/kellymedia" }}
          target="_blank"
          aria-label="GitHub"
        >
          <i className="fab fa-github" />
        </Link>
        <Link
          className="contact-social-icon-link instagram"
          to={{ pathname: "https://www.instagram.com/kellyvisions/" }}
          target="_blank"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram" />
        </Link>
        <Link
          className="contact-social-icon-link twitter"
          to={{ pathname: "https://twitter.com/kellydotmedia" }}
          target="_blank"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter" />
        </Link>
      </div>
    </div>
  );
}

console.log("Hello World!");

export default Mail;
