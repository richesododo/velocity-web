import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSearch,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "../styles/styles.css";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  const isLoggedIn = localStorage.getItem("token");

  return (
    <header>
      <div className="top-bar">
        <Link to="/">
          <img
            src={require("../assets/images/vlogo1.jpg")}
            alt="Company Logo"
          />
        </Link>
        <h1>Velocity</h1>
        <div className="icons">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="icon-button">
              <FontAwesomeIcon icon={faSignOutAlt} /> {/* Logout icon */}
            </button>
          ) : (
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </div>
      </div>
      <nav className="main-nav">
        <span className="hamburger">&#9776;</span>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
