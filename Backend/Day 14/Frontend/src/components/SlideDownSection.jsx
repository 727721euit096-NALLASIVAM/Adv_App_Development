// src/components/SlideDownSection.jsx
import React, { useState } from 'react';

const SlideDownSection = ({ sectionTitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="slide-down-section">
      <div className="section-header" onClick={() => setIsOpen(!isOpen)}>
        <h4>{sectionTitle}</h4>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="section-content">{children}</div>}
    </div>
  );
};

export default SlideDownSection;
