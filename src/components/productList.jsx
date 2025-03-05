// import React, { useState, useEffect } from "react";
// import { getData } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../features/cartSlice";
import { fetchData } from "../features/cartSlice";
import { useEffect } from "react";

const ProductList = () => {
  //   const [product, setProducts] = useState([]);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cart);

  //   useEffect(() => {
  //     const fetchDataFromApi = async () => {
  //       try {
  //         const data = await getData();
  //         // console.log("data fetched", data.products);
  //         setProducts(data);
  //       } catch (error) {
  //         console.error("Error fetching products:", error);
  //       }
  //     };

  //     fetchDataFromApi();
  //   }, []); // Empty dependency array ensures it runs only on mount

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDispatchADD = (product) => {
    console.log("add clicked", product);
    dispatch(addProductToCart(product));
  };
  if (!data || data.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="product-list-container">
      <h1 className="product-list-header">List of Products</h1>
      <div className="product-grid">
        {data.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">Price: ₹{product.price}</p>
            <button
              onClick={() => handleDispatchADD(product)}
              className="add-to-cart-button"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
