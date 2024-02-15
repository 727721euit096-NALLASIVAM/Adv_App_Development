import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlideDownSection from './SlideDownSection';
import './Addons.css';

const AddonsTopupsPage = () => {
  const [showRechargeDetails, setShowRechargeDetails] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});

  const handleRecharge = (plan) => {
    setSelectedPlan(plan);
    setShowRechargeDetails(true);
  };

  const handleRemoveRecharge = () => {
    setShowRechargeDetails(false);
  };

  // Sample plan data with individual descriptions
  const plans = [
    { title: 'TOP-UP VOUCHER FOR ₹1000', amount: '₹ 999', 
    description: 'VALIDITY - UNLIMITED , TALKTIME - Rs 844.46' },
    { title: 'TOP-UP VOUCHER FOR ₹500', amount: '₹ 499', 
    description: 'VALIDITY - UNLIMITED , TALKTIME - Rs Rs 420.73' },
    { title: 'ADD-ON FOR 1.5 GB', amount: '₹ 29', 
    description: 'VALIDITY - ACTIVE PLAN , BENEFITS - 1.5 GB' },
    { title: 'ADD-ON FOR 1 GB', amount: '₹ 19', 
    description: 'VALIDITY - ACTIVE PLAN , BENEFITS - 1 GB' },
  ];

  return (
    <div>
      <h1>AddOns And TopUps Plan Details</h1>

      {/* Slide Down Sections */}
      {plans.map((plan, index) => (
        <SlideDownSection key={index} sectionTitle={`${plan.title}`}>
          <div className="additional-section">
            <h4>{plan.title}</h4>
            <p>{plan.description}</p>
           
            <p>{plan.amount}</p>
            {/* Recharge Now button in the bottom right corner */}
            <button className="recharge-now-btn" onClick={() => handleRecharge(plan)}>
              Recharge Now
            </button>
          </div>
        </SlideDownSection>
      ))}

      {/* Recharge Details Container */}
      {showRechargeDetails && (
        <div className="recharge-details-container">
          <h2>Recharge Details</h2>
          <p>Selected Plan: {selectedPlan.title}</p>
          <p>Amount: {selectedPlan.amount}</p>
          {/* Add more details as needed */}
          <div className="recharge-buttons">
            <Link to="/payment" className="payment-btn">
              Proceed to Payment
            </Link>
            <button onClick={handleRemoveRecharge} className="remove-btn">
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddonsTopupsPage;
