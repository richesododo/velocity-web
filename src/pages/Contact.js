import React, { useState } from "react";
import "../styles/styles.css";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <section className="contact-hero">
        <div className="contact-text">
          <h1>CONTACT VM.</h1>
          <p>
            Every aspect of everything car, at your fingertips. Let us know how
            we can help.
          </p>
        </div>
      </section>
      <div className="accordion-container">
        <div className="accordion-item">
          <button
            className={`accordion-button ${isOpen ? "active" : ""}`}
            onClick={toggleAccordion}
          >
            VM COMPLAINTS.
          </button>
          <div
            className="accordion-content"
            style={{ maxHeight: isOpen ? "1000px" : "0" }}
          >
            <img
              src={require("../assets/images/Group Bentley.jpg")}
              alt="VM Complaints"
            />
            <p>If something isn’t right, we’re here to help you resolve it.</p>
            <p>
              <strong>Contact us at:</strong>
              <br />
              Telephone: 123-456-7890
              <br />
              Email: service@velocitymotors.co.uk
            </p>
            <p>
              Customer Service
              <br />
              Velocity Motors (UK) Ltd
              <br />
              Close one, Close Avenue
              <br />
              Zootopia, Brick City
              <br />
              BG28 3CD
            </p>
            <p>
              We are committed to investigating and resolving your concerns
              fairly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
