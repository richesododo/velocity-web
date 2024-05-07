import React from "react";
import "../styles/styles.css";

function AboutUs() {
  return (
    <div>
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1>ABOUT US.</h1>
          <p>VM Group in the UK.</p>
        </div>
      </section>

      <section className="info-section">
        <div className="content">
          <h2>UK OPERATIONS.</h2>
          <p>
            Velocity Motors (VM) stands at the forefront of automotive
            innovation in the UK, proudly bolstering the nation's engineering
            prowess with its advanced vehicle manufacturing. Employing a diverse
            and skilled workforce, VM drives the industry forward, demonstrating
            its commitment to excellence and sustainable growth. Since the turn
            of the millennium, our investment and expansion have solidified our
            position as a leading figure in the UK's automotive sector.
          </p>
          <p>
            Our state-of-the-art facilities are where precision engineering
            meets automotive passion, producing vehicles celebrated for their
            performance and reliability. The VM family includes a network of
            dedicated retailers, united in delivering an unrivaled motoring
            experience. We take pride in our contribution to the nation's
            economy, innovation, and the global standing of British
            craftsmanship.
          </p>
        </div>
      </section>

      <section className="vm-values">
        <div className="vm-values-overlay">
          <h2>OUR VALUES</h2>
          <p>
            Committed to innovation and excellence, VM upholds principles that
            drive positive change within and beyond the automotive industry. Our
            dedication to social responsibility and community engagement sets us
            apart, fostering a brighter future for all.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
