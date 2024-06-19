import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Contact VM Financial Services</Link>
            </li>
            <li>
              <Link to="#">Find a VM Centre</Link>
            </li>
            <li>
              <Link to="#">Local Genius</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="#">Book a Test Drive</Link>
            </li>
            <li>
              <Link to="#">Get a Brochure</Link>
            </li>
            <li>
              <Link to="#">Subscribe to VM News</Link>
            </li>
            <li>
              <Link to="#">Book a Service</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section experience-vm">
          <h4>Experience VM</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="#">VM Plug-in Hybrid</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section legal">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="#">ConnectedDrive Legal Information</Link>
            </li>
            <li>
              <Link to="#">Service Booking Legal Information</Link>
            </li>
            <li>
              <Link to="#">Product Safety Enquiry</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-social-icons">
        <Link to="#">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-youtube"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </div>

      <div className="footer-bottom">
        <p>© VM UK 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
