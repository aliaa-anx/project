import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthenticated = sessionStorage.getItem("loggedInUser"); 

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
