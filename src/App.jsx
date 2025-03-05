import React from "react";
import ProductList from "./components/productList";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
