import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/products.css";
import { apis } from "../utils/services";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://54.208.65.82:5500/items/luxury"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    try {
      const response = await apis.addToCart({
        itemId: productId,
        qty: 1,
      });
      console.log("Added to cart!", response);
      alert("Added to cart!");
    } catch (error) {
      console.log("error", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="car4">
        <div className="cars-content">
          <h1>What product would you like?</h1>
          <div className="buttons">
            <Link to="/suv">
              <button id="build-price">SUV</button>
            </Link>
            <Link to="/sport">
              <button id="discover">Sport</button>
            </Link>
            <Link to="/luxury">
              <button id="build-price">Luxury</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="viewer">
      <img src={product.photo} alt={product.name} className="product-image" />
      <p className="description">{product.name}</p>
      <p className="price">{product.price}</p>
      <button
        className="add-to-cart-button"
        onClick={() => addToCart(product._id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
