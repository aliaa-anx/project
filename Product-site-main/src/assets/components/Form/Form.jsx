import React, { useState } from "react";
import "./form.css";

const Form = ({ onSubmit }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim spaces
    const trimmedFname = fname.trim();
    const trimmedLname = lname.trim();
    const trimmedEmail = email.trim();

    // Check if fields are empty
    if (!trimmedFname || !trimmedLname || !trimmedEmail || !password || !confirmPass) {
      setError("All fields are required.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    // Validate password strength (at least 8 characters, 1 number, 1 special character)
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters long and include a number and a special character.");
      return;
    }

    // Clear error message
    setError("");

    // Call the submit function
    onSubmit({ fname: trimmedFname, lname: trimmedLname, email: trimmedEmail, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name: </label>
        <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} required />
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} required />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPass(e.target.value)} required />
      </div>
      <div>
        <label>Confirm Password: </label>
        <input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} required />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
