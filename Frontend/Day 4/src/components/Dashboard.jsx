// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SlideMover from './SlideMover';
import './Dashboard.css';

const HomePage = () => {
  return (
    <div>
      {/* Include the SlideMover component */}
      <br />
      <SlideMover />
    <div className="home-container">
      <div className="section">
        <h2>Add Plans</h2>
        <p> Basic And Premium </p>
        <Link to="/section1">
        <button><Link to={'/plans'}>View Details</Link></button>
        </Link>
      </div>
      <div className="section">
        <h2>Add-ons</h2>
        <p>Pre-AddOns and Post-AddOns.</p>
        <Link to="/section2">
        <button><Link to={'/addons'}>View Details</Link></button>
        </Link>
      </div>
      <div className="section">
        <h2>Quick Recharge</h2>
        <p>User's Last Recharge.</p>
        <Link to="/section3">
        <button><Link to={'/recharge'}>View Details</Link></button>
        </Link>
      </div>
      <div className="section">
        <h2>Payment History</h2>
        <p>History Of The Payments.</p>
        <Link to="/section4">
        <button><Link to={'/history'}>View Details</Link></button>
        </Link>
      </div>
      <div className="section">
        <h2>Quick Contact</h2>
        <p>Let's connect....</p>
        <Link to="/section5">
          <button><Link to={'/Contact'}>View Details</Link></button>
        </Link>
      </div>
      <div className="section">
        <h2>Sign in</h2>
        <p>Login here!!!!.</p>
        <Link to="/section6">
          <button><Link to={'/auth'}>View Details</Link></button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
