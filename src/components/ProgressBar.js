import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const steps = ['Personal Info', 'Academic Info', 'Account Setup'];

  return (
    <div className="progress-container">
      <div className="steps-indicator">
        {steps.map((step, index) => (
          <div key={index} className="step-wrapper">
            <div className={`step-circle ${index + 1 < currentStep ? 'completed' : ''} ${index + 1 === currentStep ? 'active' : ''}`}>
              {index + 1 < currentStep ? '✓' : index + 1}
            </div>
            <div className={`step-label ${index + 1 === currentStep ? 'active-label' : ''}`}>
              {step}
            </div>
            {index < steps.length - 1 && (
              <div className={`step-line ${index + 1 < currentStep ? 'completed-line' : ''}`} />
            )}
          </div>
        ))}
      </div>
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;