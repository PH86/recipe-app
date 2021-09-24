import React from "react";
import "./PageHeroSection.css";

function PageHeroSection(props) {
  return (
    <div>
      <div className="page-hero-container">
        <img src={props.src} alt="hero img" />
        <h1>{props.recipeName}</h1>
        <p>{props.calories}</p>
      </div>
    </div>
  );
}

export default PageHeroSection;
