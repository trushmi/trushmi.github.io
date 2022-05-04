import React from "react";
import { FaFish } from "react-icons/fa";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-icon-container">
        <FaFish className="footer-icon" />
      </div>
      <div className="footer-description">
        <div className="footer-title"> © 2022 M-I Trush </div>
      </div>
    </div>
  );
}
