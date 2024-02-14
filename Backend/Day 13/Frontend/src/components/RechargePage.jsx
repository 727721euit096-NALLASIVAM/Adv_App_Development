// src/components/RechargePage.jsx
import React from 'react';
import './RechargePage.css';
const RechargePage = () => {
  
  const imageUrl1 = 'https://th.bing.com/th/id/R.67ad3c731f1f7e60288c5e2e699e8ba3?rik=LcBlvpn4vtVN2Q&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fBest-Friends-Forever-HD-Wallpapers.jpg&ehk=w8AstdIb7G1doJ5B0msyYZBxMMC4%2boCXEL%2bPZdX92nQ%3d&risl=&pid=ImgRaw&r=0';
  const imageUrl2 = 'https://th.bing.com/th/id/OIP.4pSYbPO4nzPkEbkR2awEhAHaEK?rs=1&pid=ImgDetMain';


  return (
    <div>
    <div className="image-selection-container">
      <div className="selected-image">
        <img src={imageUrl1} alt="Friend Recharge" />
        <div className="overlay-text">
          <div className="heading">Friend Recharge</div>
          <div className="slogan">Connect with friends and recharge together!</div>
        </div>
      </div>
      <a href="#" className="checkout-button">Recharge</a>
    </div>

    <div className="image-selection-container">
      <div className="selected-image">
        <img src={imageUrl2} alt="Family Recharge" />
        <div className="overlay-text">
          <div className="heading">Family Recharge</div>
          <div className="slogan">Recharge for your family and stay connected!</div>
        </div>
      </div>
      <a href="#" className="checkout-button">Recharge</a>
    </div>
  </div>
  );
};

export default RechargePage;
