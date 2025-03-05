import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../features/cartSlice";

function Cart() {
  const { cartProduct, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const handleDispatchRemove = (product) => {
    dispatch(removeProductFromCart(product));
  };
  return (
    <div>
      <h1>HERE IS YOUR CART </h1>

      <div>
        {cartProduct.length > 0 ? (
          cartProduct.map((item) => (
            <div key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleDispatchRemove(item)}>remove</button>
            </div>
          ))
        ) : (
          <p>Cart is Empty</p>
        )}
      </div>
      <p className="cart-summary">Total Items: {totalQuantity}</p>
      <p className="cart-summary">Total Price: ₹{totalPrice}</p>
    </div>
  );
}

export default Cart;
