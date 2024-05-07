import React, { useState, useEffect } from "react";
import ferrariImage from "../assets/images/2024-ferrari-sf90.jpg";
import audiImage from "../assets/images/Audi1.jpg";
import b1Image from "../assets/images/B1.jpg";
import rollsRoyceImage from "../assets/images/rolls-royce-spectre-front-angle-low.jpg";
import bentleyImage from "../assets/images/Bentley Bentayga.jpg";
import ownerImage from "../assets/images/car-owner.jpg";

import "../styles/styles.css";

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      bgImage: ferrariImage,
      title: "Unleash your passion: Feel the thrill of Ferrari.",
      id: 1,
    },
    {
      bgImage: audiImage,
      title: "Empowering luxury: Unleash the electric elegance of Audi.",
      id: 2,
    },
    { bgImage: b1Image, title: "Breathless.", id: 3 },
    {
      bgImage: rollsRoyceImage,
      title: "Elegance.",
      id: 4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const changeSlide = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex < 0) newIndex = slides.length - 1;
    else if (newIndex >= slides.length) newIndex = 0;
    setSlideIndex(newIndex);
  };

  return (
    <div>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="slides"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              display: slideIndex === index ? "block" : "none",
            }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <div className="buttons">
                <button>Buy Now</button>
                <button>Discover now</button>
              </div>
            </div>
          </div>
        ))}
        <div className="prev" onClick={() => changeSlide(-1)}>
          &#10094;
        </div>
        <div className="next" onClick={() => changeSlide(1)}>
          &#10095;
        </div>
      </div>

      <div className="vm-find-section">
        <h2>FIND YOUR DREAM CAR.</h2>
        <div className="vm-options-container">
          <div className="vm-option">
            <span className="vm-icon">
              <i className="fas fa-car"></i>
            </span>
            <h3>FIND A NEW CAR</h3>
            <button onClick={() => console.log("Search new cars")}>
              Search now
            </button>
          </div>
          <div className="vm-option">
            <span className="vm-icon">
              <i className="fas fa-car-side"></i>
            </span>
            <h3>FIND A USED CAR</h3>
            <button onClick={() => console.log("Search used cars")}>
              Search now
            </button>
          </div>
          <div className="vm-option">
            <span className="vm-icon">
              <i className="fas fa-wrench"></i>
            </span>
            <h3>BUILD YOUR OWN</h3>
            <button onClick={() => console.log("Build and price")}>
              Build & Price
            </button>
          </div>
          <div className="vm-option">
            <span className="vm-icon">
              <i className="fas fa-book"></i>
            </span>
            <h3>GET A BROCHURE</h3>
            <button onClick={() => console.log("Get a brochure")}>
              Get a Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Top Cars Section */}
      <div className="top-cars-section">
        <div className="car1">
          <div className="cars-content">
            <h1>THE i5</h1>
            <p>Ride with Class. Luxury at its finest.</p>
            <div className="buttons">
              <button>Build & Price</button>
              <button>Discover now</button>
            </div>
          </div>
        </div>

        <div className="car2">
          <div className="cars-content">
            <h1>Wraith coupe</h1>
            <p>Elegance in motion: Experience the luxury of Rolls-Royce.</p>
            <div className="buttons">
              <button>Build & Price</button>
              <button>Discover now</button>
            </div>
          </div>
        </div>

        <div className="car3">
          <div className="cars-content">
            <h1>GT MULLINER BLACKLINE</h1>
            <p>
              When Luxury meets performance: Experience the elegance of Bentley.
            </p>
            <div className="buttons">
              <button>Build & Price</button>
              <button>Discover now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="offer-container">
          <img src={bentleyImage} alt="Special Offer" className="offer-image" />
          <div className="offer-text">
            <h3>OFFERS</h3>
            <h2>VM FINANCE OFFERS.</h2>
            <p>
              Check out a variety of VM finance offers available across the VM
              range, including Electric cars.
            </p>
            <button onClick={() => console.log("Find out more about offers")}>
              Find out more
            </button>
          </div>
        </div>

        <div className="owner-container">
          <div className="owner-text">
            <h3>OWNERS</h3>
            <h2>VM OWNER'S DIRECTORY.</h2>
            <p>
              Everything you need for your car, all in one place. From servicing
              and accessories to finance and in-car technology.
            </p>
            <button
              onClick={() => console.log("Find out more about owner benefits")}
            >
              Find out more
            </button>
            <button onClick={() => console.log("Book a service")}>
              Book a service
            </button>
          </div>
          <img src={ownerImage} alt="Owner Benefits" className="owner-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
