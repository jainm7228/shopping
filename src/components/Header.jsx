import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <nav>
        <NavLink to="/products">home</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
      </nav>
    </>
  );
}

export default Header;
