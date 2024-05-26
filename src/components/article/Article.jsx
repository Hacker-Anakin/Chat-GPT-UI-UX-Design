import React from "react";
import "./article.css";

export default function Article({ pic, date, heading, link }) {
  return (
    <div className="article">
      <div className="article-img-container">
        <img src={`${pic}`} alt="" />
      </div>
      <div className="article-content">
        <div>
          <p>{date}</p>
          <h5>{heading}</h5>
        </div>
          <a href={`${link}`}>Read Full Aricle</a>
      </div>
    </div>
  );
}
