// src/components/UserAuth.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserAuth.css';

const UserAuth = () => {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (emailOrPhoneNumber.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields.');
      return;
    }

    // Simulating a successful login for demonstration purposes
    // You might want to add more robust validation in a real application
    setAuthenticated(true);
    navigate('/');
  };

  return (
    <div className="user-auth-container">
      <h2>Login or Register</h2>
      <form className="user-auth-form" onSubmit={handleLogin}>
        <label>
          Email or Phone Number:
          <input
            type="text"
            value={emailOrPhoneNumber}
            onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="forgetpassword">
          <Link to="/forgetpassword">Forgot Password?</Link>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="buttons-container">
          <button type="submit">Login</button>
        </div>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default UserAuth;
