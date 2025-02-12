import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.removeItem("loggedInUser"); // Remove user session
        navigate("/"); // Redirect to login
    }, [navigate]);

    return null; // No UI needed, just redirects
};

export default Logout;
