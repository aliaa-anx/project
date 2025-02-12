import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import './getProducts.css'; 

export default function GetProducts() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="products-container">
        {products
          .filter(product => product.rating && product.rating.rate > 3)
          .map(product => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
