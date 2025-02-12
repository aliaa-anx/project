import React from 'react';
import './card.css';
import { Link, useLocation } from 'react-router-dom';


const Card = ({ product }) => {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith('/product/');
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-price">Price: ${product.price}</p>
        <p className="card-description">{product.description}</p>
        <p className="card-rating">Rating: {product.rating.rate}</p>

        {!isProductPage && (
          <button>
            <Link to={`/product/${product.id}`}>
              View
            </Link>
          </button>
        )}

        {isProductPage && (
          <button>
            <Link to="/product">
              Back to Home
            </Link>
          </button>
        )}
      </div>
    </div>
  )}


export default Card;
