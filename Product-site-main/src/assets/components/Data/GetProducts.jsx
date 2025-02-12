/*import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import './getProducts.css'; 

export default function GetProducts() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    fetch("https://ecommerce.routemisr.com/api/v1/products")
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
*/
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'; // Import the Card component
import './getProducts.css'; // Import the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from the API
    fetch('https://ecommerce.routemisr.com/api/v1/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.data); // Assuming the API response has a "data" field
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <span className="logo">Fresh Cart</span>
          <ul className="nav-links">
            <li>Home</li>
            <li>Cart</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="logout-button">Logout</button>
        </div>
      </nav>

      {/* Product List */}
      <div className="product-list">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;