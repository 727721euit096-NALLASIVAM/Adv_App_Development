// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +91 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* Add your social media icons or links here */}
            {/* Example: <i className="fab fa-facebook"></i> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Online Mobile Recharge Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
