import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              MK
            </Link>
          </div>
          <small className="website-rights">Michael Kelly © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link email"
              to={{ pathname: "mailto:michael@kelly.media" }}
              target="_blank"
              aria-label="Email"
            >
              <i className="far fa-envelope" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to={{
                pathname: "https://www.linkedin.com/in/michael-kelly-media/",
              }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
            <Link
              className="social-icon-link github"
              to={{ pathname: "https://github.com/kellymedia" }}
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to={{ pathname: "https://www.instagram.com/kellyvisions/" }}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to={{ pathname: "https://twitter.com/kellydotmedia" }}
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
