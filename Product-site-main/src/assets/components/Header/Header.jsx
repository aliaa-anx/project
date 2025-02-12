import React from "react";
import './header.css';

import { Link } from "react-router-dom";
export default function Header() {
  return (
    
      <header>
        <h1>Welcome</h1>
        <ul>
        {/* <Link to="/home/product">Products</Link> */}
          <Link to="/">Login</Link> |
        <Link to="/register">Register</Link>
          
        </ul>
      </header>
   
  );
}
