import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Sign Up forms
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "", // Only used in SignUp
    name: "", // Added for full name in SignUp
    postCode: "", // Added for postal code in SignUp
    address: "", // Added for address in SignUp
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://velocity-api-six.vercel.app/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        console.log("Login Success:", response.data);
        navigate("/");
      } else {
        throw new Error("Authentication failed, no token received");
      }
    } catch (error) {
      console.error(
        "Login Error:",
        error.response ? error.response.data : error
      );
      alert("Failed to login, please check your credentials.");
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://54.208.65.82:5500/signup",
        formData
      );
      console.log("Signup Success:", response.data);
      localStorage.setItem("sessionID", response.data.sessionID); //'sessionID' is the key you receive
      alert("Signup successful, please login.");
      navigate("/login"); // Redirect to login after signup
    } catch (error) {
      console.error(
        "Signup Error:",
        error.response ? error.response.data : error
      );
      alert("Error during signup.");
    }
  };

  return (
    <div>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked={isSignIn}
            onChange={() => setIsSignIn(true)}
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input
            id="tab-2"
            type="radio"
            name="tab"
            className="sign-up"
            checked={!isSignIn}
            onChange={() => setIsSignIn(false)}
          />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            {isSignIn ? signInForm() : signUpForm()}
          </div>
        </div>
      </div>
    </div>
  );

  function signInForm() {
    return (
      <form className="sign-in-htm" onSubmit={handleSignIn}>
        <div className="group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="input"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <input type="submit" className="button" value="Sign In" />
        </div>
        <div className="hr"></div>
        <div className="foot-lnk">
          <a href="#forgot">Forgot Password?</a>
        </div>
      </form>
    );
  }

  function signUpForm() {
    return (
      <form className="sign-up-htm" onSubmit={handleSignUp}>
        <div className="group">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="input"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="name" className="label">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="input"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="input"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="postCode" className="label">
            Post Code
          </label>
          <input
            id="postCode"
            type="text"
            className="input"
            name="postCode"
            value={formData.postCode}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="address" className="label">
            Address
          </label>
          <input
            id="address"
            type="text"
            className="input"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="group">
          <input type="submit" className="button" value="Sign Up" />
        </div>
        <div className="hr"></div>
      </form>
    );
  }
}

export default Login;
