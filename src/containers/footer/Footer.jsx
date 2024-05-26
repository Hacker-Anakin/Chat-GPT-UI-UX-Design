import React from "react";
import "./footer.css";

import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer section_padding">
      <div className="footer-heading">
        <h1 className="gradient-text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="footer-btn">
        <button>Request Early Access</button>
      </div>
      <div className="footer-links">
        <div className="footer-links-logo">
          <img src={logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-links-container">
          <h6>Links</h6>
          <a href="/">Overons</a>
          <a href="/">Social Media</a>
          <a href="/">Counters</a>
          <a href="/">Contact</a>
        </div>
        <div className="footer-links-container">
          <h6>Company</h6>
          <a href="/">Terms and Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Contact</a>
        </div>
        <div className="footer-links-container">
          <h6>Get in Touch</h6>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132345</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2021 APT-3. All rights reserved.</p>
      </div>
    </div>
  );
}
