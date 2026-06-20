import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Step1Personal from './Step1Personal';
import Step2Academic from './Step2Academic';
import Step3Account from './Step3Account';
import Summary from './Summary';
import './form.css';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load from localStorage on refresh
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('multiStepFormData');
    return saved ? JSON.parse(saved) : {};
  });

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('multiStepFormData', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName || formData.fullName.trim() === '')
        newErrors.fullName = 'Full name is required';
      else if (formData.fullName.trim().length < 3)
        newErrors.fullName = 'Name must be at least 3 characters';

      if (!formData.email || formData.email.trim() === '')
        newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = 'Please enter a valid email';

      if (!formData.phone || formData.phone.trim() === '')
        newErrors.phone = 'Phone number is required';
      else if (!/^[0-9]{10}$/.test(formData.phone))
        newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (step === 2) {
      if (!formData.college || formData.college.trim() === '')
        newErrors.college = 'College name is required';

      if (!formData.branch || formData.branch === '')
        newErrors.branch = 'Please select your branch';

      if (!formData.year || formData.year === '')
        newErrors.year = 'Please select your year';

      if (!formData.rollNumber || formData.rollNumber.trim() === '')
        newErrors.rollNumber = 'Roll number is required';
    }

    if (step === 3) {
      if (!formData.username || formData.username.trim() === '')
        newErrors.username = 'Username is required';
      else if (formData.username.trim().length < 4)
        newErrors.username = 'Username must be at least 4 characters';

      if (!formData.password || formData.password === '')
        newErrors.password = 'Password is required';
      else if (formData.password.length < 8)
        newErrors.password = 'Password must be at least 8 characters';

      if (!formData.confirmPassword || formData.confirmPassword === '')
        newErrors.confirmPassword = 'Please confirm your password';
      else if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = 'Passwords do not match';

      if (!formData.agreeTerms)
        newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
    setErrors({});
  };

  const handleSubmit = () => {
    localStorage.removeItem('multiStepFormData');
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setCurrentStep(1);
  };

  if (isSubmitted) {
    return (
      <div className="form-card">
        <div className="success-screen">
          <div className="success-icon">🎊</div>
          <h2>Registration Successful!</h2>
          <p>Welcome, <strong>{formData.fullName}</strong>!</p>
          <p>Your account has been created successfully.</p>
          <button
            className="btn-next"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({});
              setCurrentStep(1);
            }}
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <div className="form-header">
        <h1>📋 Student Registration</h1>
        <p>Complete all steps to register</p>
      </div>

      <ProgressBar currentStep={currentStep} totalSteps={3} />

      {currentStep === 1 && (
        <Step1Personal
          formData={formData}
          updateFormData={updateFormData}
          errors={errors}
        />
      )}
      {currentStep === 2 && (
        <Step2Academic
          formData={formData}
          updateFormData={updateFormData}
          errors={errors}
        />
      )}
      {currentStep === 3 && (
        <Step3Account
          formData={formData}
          updateFormData={updateFormData}
          errors={errors}
        />
      )}
      {currentStep === 4 && (
        <Summary
          formData={formData}
          onSubmit={handleSubmit}
          onEdit={handleEdit}
        />
      )}

      {currentStep < 4 && (
        <div className="form-navigation">
          {currentStep > 1 && (
            <button className="btn-prev" onClick={handlePrev}>
              ← Previous
            </button>
          )}
          <button className="btn-next" onClick={handleNext}>
            {currentStep === 3 ? 'Review →' : 'Next →'}
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;