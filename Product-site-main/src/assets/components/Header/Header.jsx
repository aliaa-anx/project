import React from "react";
import './header.css';

import { Link } from "react-router-dom";
export default function Header() {
  return (
    
      <header>
        <h1>Welcome</h1>
        <ul>
          <Link to='/product'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          
        </ul>
      </header>
   
  );
}
