import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../features/cartSlice";
import "../styles/cart.css";

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
    </div>
  );
}

export default Cart;
