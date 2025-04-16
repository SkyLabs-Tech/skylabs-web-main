import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import logo from '../Media/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <img src={logo} alt="SkyLabs Developments" className="logo" />
        <h3>SkyLabs Developments</h3>
      </div>

      <div className="footer-section">
        <h4>CUSTOMER</h4>
        <ul>
          <li>
            <a 
              href="/politica-de-privacidad" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Privacy policy
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact us</h4>
        <p><FaEnvelope /> fparedes@skylabs-developments.com</p>

        <h4>Follow us</h4>
        <a 
          href="https://www.linkedin.com/company/skylabs-developments" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    
      <div className="footer-bottom">
        <p>© 2025 SkyLabs Developments. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;