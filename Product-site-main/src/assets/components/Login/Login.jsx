import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email || !password) {
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            sessionStorage.setItem("loggedInUser", JSON.stringify(user));
            navigate("/home/product"); // Redirect to homepage after login
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
