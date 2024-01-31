// src/components/ContactPage.jsx
import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupVisibility(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or concerns, feel free to reach out to us. We're here to help!</p>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +91 (123) 456-7890</p>
      </div>

      <div className="contact-form">
        <h2>Send us a Message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {isPopupVisible && (
        <div className="popup-message">
          <p>Message sent successfully! We will get back to you soon.</p>
          <button onClick={() => setPopupVisibility(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
