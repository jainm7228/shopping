import React, { useState, useEffect } from "react";
import { getData } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../features/cartSlice";

const ProductList = () => {
  const [product, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await getData();
        // console.log("data fetched", data.products);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchDataFromApi();
  }, []); // Empty dependency array ensures it runs only on mount

  const handleDispatchADD = (product) => {
    console.log("add clicked", product);
    dispatch(addProductToCart(product));
  };
  return (
    <div>
      <h1>List of Products</h1>
      {product.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">Price: ₹{product.price}</p>
          <button onClick={() => handleDispatchADD(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
