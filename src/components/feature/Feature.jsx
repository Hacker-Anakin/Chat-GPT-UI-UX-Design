import React from "react";
import "./feature.css";

export default function Feature({title, text}) {
  return (
    <div className="feature-container">
      <div className="feature-container-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="feature-container-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
