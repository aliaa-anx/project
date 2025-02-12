import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="#" className="footer-link">
          <img
            src="src/assets/images/facebook.png"
            alt="Facebook"
            className="footer-icon"
          />
        </a>
        <a href="#" className="footer-link">
          <img
            src="src/assets/images/instagram.png"
            alt="Instagram"
            className="footer-icon"
          />
        </a>
        <a href="#" className="footer-link">
          <img
            src="src/assets/images/linkedin.png"
            alt="LinkedIn"
            className="footer-icon"
          />
        </a>
      </footer>
    </>
  );
}
