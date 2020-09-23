import React from "react";
import "../../App.css";
import Cards from "../Projects";
import Footer from "../Footer";

export default function ProjectsButton() {
  return (
    <>
      <h1 className="projects">PROJECTS</h1>
      <Cards />
      <Footer />
    </>
  );
}
