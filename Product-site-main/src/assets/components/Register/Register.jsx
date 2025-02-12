import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form"; // Import the form component

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleRegister = (userData) => {
        const { fname, lname, email, password } = userData;

        // Validation: Check if fields are empty
        if (!fname || !lname || !email || !password) {
            setError("All fields are required.");
            return;
        }

        // Retrieve existing users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if email is already registered
        const userExists = users.some((user) => user.email === email);
        if (userExists) {
            setError("Email is already registered. Try logging in.");
            return;
        }

        // Save new user
        const newUser = { fname, lname, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Redirect to login page
        navigate("/");
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Form onSubmit={handleRegister} />
        </div>
    );
};

export default Register;
