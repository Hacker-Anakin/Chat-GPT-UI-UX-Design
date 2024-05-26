import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

export default function Features() {
  return (
    <div className="features section_padding" id="features">
      <div className="features-heading">
        <h1 className="gradient-text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>
          <a href="#possibility">Request Early Access to Get Started</a>
        </p>
      </div>
      <div className="features-feature-container">
        <div>
          <Feature
            title={"Improving end distrusts instantly "} text={"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."}
          ></Feature>
        </div>
        <div>
          <Feature title={"Become the tended active"} text={"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."}
          ></Feature>
        </div>
        <div>
          <Feature title={"Message or am nothing"} text={"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."}
          ></Feature>
        </div>
        <div>
          <Feature title={"Really boy law county"} text={"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."}
          ></Feature>
        </div>
      </div>
    </div>
  );
}
