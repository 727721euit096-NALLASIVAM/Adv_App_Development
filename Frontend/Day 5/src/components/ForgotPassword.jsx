// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import './forgotPassword.css';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    // TODO: Implement the logic to send a password reset email
    // This is where you'd typically make an API request to your backend
    // to initiate the password reset process.
    // For the sake of the example, let's just show a message.
    setMessage(`Password reset instructions sent to ${email}`);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleResetPassword}>
        <label>
          Enter your email address:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ForgotPassword;
