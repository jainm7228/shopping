import React from "react";
import "../styles/header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <>
      <nav>
        <NavLink to="/" className="nav-logo">
          SHOPPERS STOP
        </NavLink>

        <div className="nav-links">
          <NavLink to="/products">home</NavLink>
          <NavLink to="/Cart">
            Cart{" "}
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
