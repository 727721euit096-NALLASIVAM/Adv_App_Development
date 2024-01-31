// src/components/PlanPage.jsx
import React, { useState } from 'react';
import BasicPlanPage from './BasicPlanPage'
import PremiumPlanPage from './PremiumPlanPage';
import AddonsTopupsPage from './AddonsTopupsPage';


import './Planspage.css';

const PlanPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Sample data for plans
  const plansData = [
    {
      id: 1,
      title: 'Basic Plan',
      description: 'Enjoy seamless connectivity and affordable rates. Stay connected with our basic plan.',
    },
    {
      id: 2,
      title: 'Premium Plan',
      description: 'Unlock premium features and lightning-fast speeds. Elevate your experience with our premium plan.',
    },
    {
      id: 3,
      title: 'Addons and Topups Plan',
      description: 'Explore additional features and top-up options to enhance your connectivity.',
    },
  ];

  // Function to select a plan
  const selectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="plan-selection-container">
      <h1>Select Your Plan</h1>
      <br />

      {/* Basic, Premium, and Addons/Topups Plans */}
      <div className="plan-list">
        {plansData.map((plan) => (
          <div
            className={`plan-item ${selectedPlan === plan ? 'selected' : ''}`}
            key={plan.id}
            onClick={() => selectPlan(plan)}
          >
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>

      {/* Selected Plan Details */}
      {selectedPlan && (
        <div className="selected-plan-details">
          <h2>Selected Plan Details</h2>
          {selectedPlan.id === 1 ? (
            <BasicPlanPage />
          ) : selectedPlan.id === 2 ? (
            <PremiumPlanPage />
          ) : selectedPlan.id === 3 ? (
            <AddonsTopupsPage />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default PlanPage;
