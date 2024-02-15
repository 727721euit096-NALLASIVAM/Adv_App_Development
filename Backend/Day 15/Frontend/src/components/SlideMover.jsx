// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import './SlideMover.css';

const Dashboard = () => {
  const imageUrl = 'https://images.says.com/uploads/story_source/source_image/478247/a6bf.gif?_ga=2.162305596.1896206094.1706627881-1522261623.1706627880';

  return (
    <div className="image-selection-container">
      <div className="selected-image">
        <img src={imageUrl} alt="Selected Image" />
        <div className="welcome-text">Welcome !!</div>
      </div>
    </div>
  );
};

export default Dashboard;
