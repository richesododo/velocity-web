import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Assuming you create a Home component for homepage content
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SUV from "./pages/SUV";
import Sport from "./pages/Sport";
import ShowCart from "./pages/Showcart";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/suv" element={<SUV />} />
          <Route path="/luxury" element={<Products />} />
          <Route path="/cart" element={<ShowCart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
