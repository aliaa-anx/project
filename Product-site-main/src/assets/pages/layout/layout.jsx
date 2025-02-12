import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
   const navigate = useNavigate();

   const handleLogout = () => {
      sessionStorage.removeItem("loggedInUser"); // Clear session
      navigate("/"); // Redirect to login
   };

   return (
      <div>
         <nav>
            <Link to="/home/product">Products</Link> |
            <Link to="/home/about">About</Link> |
            <Link to="/home/contact">Contact</Link> |
            <Link to="/">Login</Link> |
            <Link to="/register">Register</Link> |
            <button onClick={handleLogout} style={{ marginLeft: "10px" }}>Logout</button>
         </nav>
         <Outlet />
      </div>
   );
};

export default Layout;
