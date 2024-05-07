import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/styles.css";

const SUV = () => {
  const [suvs, setSUVs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSUVs = async () => {
      try {
        const response = await axios.get("http://localhost:5500/items/suv");
        setSUVs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching SUVs:", error);
        setError("Error fetching SUVs");
        setLoading(false);
      }
    };

    fetchSUVs();
  }, []);

  const addToCart = async (suvId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in to add items to cart.");
        return;
      }
      await axios.post(
        "http://localhost:5500/cart",
        { itemId: suvId, qty: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Added to cart!");
    } catch (error) {
      console.error("Add to Cart Error:", error);
      alert("Failed to add to cart, please check your connection.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="car5">
        <div className="cars-content">
          <div className="buttons">
            <Link to="/sport">
              <button id="build-price">Sport</button>
            </Link>
            <Link to="/luxury">
              <button id="build-price">Luxury</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        {suvs.map((suv) => (
          <SUVCard key={suv._id} suv={suv} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

const SUVCard = ({ suv, addToCart }) => {
  return (
    <div className="viewer">
      <img src={suv.photo} alt={suv.name} className="product-image" />
      <p className="description">{suv.name}</p>
      <p className="price">{`£${suv.price}`}</p>
      <button className="buy-now-button" onClick={() => addToCart(suv._id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default SUV;
