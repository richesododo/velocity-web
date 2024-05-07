import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/ShowCart.css";
import { apis } from "../utils/services";

const Showcart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const fetchCartItems = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to view your cart.");
      navigate("/login");
      return;
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.get(
        `http://localhost:5500/cart/${userId}`,
        config
      );
      setCartItems(response.data);
      updateTotalPrice(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }, [navigate]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const updateTotalPrice = (items) => {
    console.log("Items for Total Calculation:", items); // Debugging output
    const total = items.reduce((sum, item) => {
      const price = parseFloat(item.itemId.price); // Ensure price is a float
      const quantity = parseInt(item.qty, 10); // Ensure quantity is an integer

      if (isNaN(price) || isNaN(quantity)) {
        console.error("Invalid item data", item);
        return sum; // Skip this item in the total calculation
      }

      return sum + price * quantity;
    }, 0);

    console.log("Calculated Total:", total); // Debugging output
    setTotalPrice(total.toFixed(2)); // This should now always set a valid number or "0.00"
  };

  // Handle quantity changes
  const handleQuantityChange = async (itemId, action) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (!token || !userId) {
      alert("Please log in to modify your cart.");
      navigate("/login");
      return;
    }

    const qtyChange = action === "increment" ? 1 : -1;
    try {
      const response = await apis.quantityChange(userId, itemId, qtyChange);
      if (response.ok) {
        fetchCartItems(); // Make sure this function is defined and fetches the latest cart data
      } else {
        console.error("Failed to update the quantity on the server.");
      }
    } catch (error) {
      console.error("Error updating quantity:", error.response || error);
    }
  };

  // Handle item deletion
  const handleDeleteItem = async (itemId) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (!token || !userId) {
      alert("Please log in to modify your cart.");
      navigate("/login");
      return;
    }
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item from your cart?"
    );
    if (!confirmDelete) return;

    const updatedCartItems = cartItems.filter(
      (item) => item.itemId._id !== itemId
    );
    setCartItems(updatedCartItems);
    updateTotalPrice(updatedCartItems);

    try {
      await apis.removeFromCart({
        itemId: itemId,
        qty: 1,
      });
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.itemId._id} className="cart-item">
                <img src={`${item.itemId.photo}`} alt={item.itemId.name} />
                <div>
                  <h4>{item.itemId.name}</h4>
                  <p>
                    £{item.itemId.price} x {item.qty}
                  </p>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.itemId._id, "increment")
                    }
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.itemId._id, "decrement")
                    }
                    disabled={item.qty <= 1}
                  >
                    -
                  </button>
                  <button onClick={() => handleDeleteItem(item.itemId._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="total-price">
              <h3>Total: £{totalPrice}</h3>
            </div>
            <button
              onClick={() => console.log("Order Confirmed!")}
              className="btn btn-primary"
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
};

export default Showcart;
