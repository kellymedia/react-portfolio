import React from "react";
import "./Resume.css";
import { Link } from "react-router-dom";

const STYLES = ["res-btn--primary", "res-btn--outline", "res-btn--test"];

const SIZES = ["res-btn--medium", "res-btn--large"];

export const Resume = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link
      to="../images/Michael_Kelly_Resume.pdf"
      className="res-btn-mobile"
      target="_blank"
    >
      <button
        className={`res-btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
