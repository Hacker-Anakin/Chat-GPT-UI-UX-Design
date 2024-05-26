import React from 'react';
import "./possibility.css";
import possibilityImg from "../../assets/possibility.png";

export default function Possibility() {
  return (
    <div className="section_padding possibility" id='possibility'>
      <div className='possibility-img'>
        <img src={possibilityImg} alt="" />
      </div>
      <div className="possibility-content">
        <h3>Request Early Access to Get Started</h3>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p><a href="#cta">Request Early Access to Get Started</a></p>
      </div>
    </div>
  )
}
