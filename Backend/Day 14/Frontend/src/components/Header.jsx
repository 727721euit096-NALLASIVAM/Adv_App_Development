// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ authenticated, userEmail, onLogout }) => {
  return (
    <header>
      <h1>Mobile Recharge Portal</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/plans">Plans</a>
        <a href="/recharge">Recharge</a>
        <a href="/history">Payment History</a>
        <a href="/contact">Contact</a>
        <a href="/AdminLogIn">AdminLogIn</a>
        {authenticated ? (
          <>
            <p>Welcome, {userEmail}!</p>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <Link to="/auth">Login/Register</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
