import React, { useState } from "react";
import "./form.css";

const Form = ({ onSubmit }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fname, lname, email, password });
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
