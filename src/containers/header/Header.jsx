import React from "react";
import "./header.css";

import people from "../../assets/people.png";
import header_img from "../../assets/ai.png";

export default function Header() {
  return (
    <div className="header section_padding" id="home">
      <div className="header-content">
        <h1 className="gradient-text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-input">
          <input
            type="text"
            className="email"
            placeholder="Your Email Address"
          />
          <button className="header-get_started">Get Started</button>
        </div>

        <div className="header-people_container">
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-img">
        <img src={header_img} alt="" />
      </div>
    </div>
  );
}
