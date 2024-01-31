// src/pages/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Footer from './Footer';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError("Password and Confirm Password don't match");
      return;
    }

    // Implement registration logic here
    console.log('Registering with:', firstName, lastName, email, phoneNumber, password);

    // Reset error after successful registration
    setError('');
  };

  return (
    <>
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

          {/* Display error message */}
          {error && <p className="error-message">{error}</p>}

          <div className="buttons-container">
            <button onClick={handleRegister}>
              <center>
                <Link to="/auth">Register</Link>
              </center>
            </button>
          </div>
        </form>
        <p>
          Already have an account? <Link to="/auth">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
