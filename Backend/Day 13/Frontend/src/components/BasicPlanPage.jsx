import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlideDownSection from './SlideDownSection';
import './BasicPlanPage.css';

const BasicPlanPage = () => {
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
    { title: '3GB FOR 3 MONTH WITH BASIC', amount: '₹ 999', 
    description: 'VALIDITY - 84 DAYS ,DATA - 3GB/Day,Unlimited Call/Message' },
    { title: '3GB FOR 1 MONTH WITH BASIC', amount: '₹ 399', 
    description: 'VALIDITY - 28 DAYS ,DATA - 3GB/Day,Unlimited Call/Message' },
    { title: '2GB FOR 3 MONTH WITH BASIC', amount: '₹ 719', 
    description: 'VALIDITY - 84 DAYS ,DATA - 2GB/Day,Unlimited Call/Message' },
    { title: '2GB FOR 1 MONTH WITH BASIC', amount: '₹ 359', 
    description: 'VALIDITY - 28 DAYS ,DATA - 2GB/Day,Unlimited Call/Message' },
    { title: '1GB FOR 3 MONTH WITH BASIC', amount: '₹ 599', 
    description: 'VALIDITY - 84 DAYS ,DATA - 1GB/Day,Unlimited Call/Message' },
    { title: '1GB FOR 1 MONTH WITH BASIC', amount: '₹ 219', 
    description: 'VALIDITY - 28 DAYS ,DATA - 1GB/Day,Unlimited Call/Message' },
  ];

  return (
    <div>
      <h1>Basic Plan Details</h1>

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

export default BasicPlanPage;
