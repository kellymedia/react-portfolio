import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Mail from "../Mail";
import "../Footer.css";

export default function Contact() {
  return (
    <>
      <div>
        <h1 className="contact">Contact</h1>
      </div>
      <Mail />
      <Footer />
    </>
  );
}
