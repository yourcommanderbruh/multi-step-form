import React from 'react';

const Step1Personal = ({ formData, updateFormData, errors }) => {
  return (
    <div className="step-content">
      <h2 className="step-title">👤 Personal Information</h2>
      <p className="step-subtitle">Tell us about yourself</p>

      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName || ''}
          onChange={(e) => updateFormData('fullName', e.target.value)}
          className={errors.fullName ? 'input-error' : ''}
        />
        {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
      </div>

      <div className="form-group">
        <label>Email Address *</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email || ''}
          onChange={(e) => updateFormData('email', e.target.value)}
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Phone Number *</label>
        <input
          type="tel"
          placeholder="Enter 10-digit phone number"
          value={formData.phone || ''}
          onChange={(e) => updateFormData('phone', e.target.value)}
          className={errors.phone ? 'input-error' : ''}
        />
        {errors.phone && <span className="error-msg">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          value={formData.dob || ''}
          onChange={(e) => updateFormData('dob', e.target.value)}
        />
      </div>
    </div>
  );
};

export default Step1Personal;