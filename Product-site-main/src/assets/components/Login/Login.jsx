import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");  // Change to email instead of username
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // Search for user with matching email and password
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login Successful!");
      navigate("/home"); // Redirect to home page after login
    } else {
      alert("Invalid Credentials!");
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
