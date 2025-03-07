import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../features/cartSlice";
import "../styles/cart.css";
import { NavLink } from "react-router-dom";

function Cart() {
  const { cartProduct, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const handleDispatchRemove = (productId) => {
    console.log("remove clicked", productId);
    dispatch(removeProductFromCart(productId));
  };
  return (
    <div className="cart-container">
      <h1 className="cart-header">HERE IS YOUR CART </h1>

      <div className="cart-items">
        {cartProduct.length > 0 ? (
          cartProduct.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                onClick={() => handleDispatchRemove(item.id)}
                className="remove-button"
              >
                remove
              </button>
            </div>
          ))
        ) : (
          <p className="cart-summary">Cart is Empty</p>
        )}
      </div>
      <p className="cart-summary">Total Items: {totalQuantity}</p>
      <p className="cart-summary">Total Price: ₹{totalPrice}</p>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          padding: "10px",
          borderRadius: "8px",
          background:
            "linear-gradient(to right, #4facfe, #00f2fe)" /* Gradient Blue */,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <NavLink
          to="/products"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "5px",
            display: "inline-block",
            transition: "background 0.3s ease-in-out",
          }}
          onMouseOver={(e) =>
            (e.target.style.background = "rgba(255, 255, 255, 0.2)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "linear-gradient(to right,rgb(29, 82, 226),rgb(58, 7, 225))")
          }
        >
          Continue Shopping
        </NavLink>
      </div>
    </div>
  );
}

export default Cart;
