import React, { useState } from 'react';

const Step3Account = ({ formData, updateFormData, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="step-content">
      <h2 className="step-title">🔐 Account Setup</h2>
      <p className="step-subtitle">Secure your account</p>

      <div className="form-group">
        <label>Username *</label>
        <input
          type="text"
          placeholder="Choose a username"
          value={formData.username || ''}
          onChange={(e) => updateFormData('username', e.target.value)}
          className={errors.username ? 'input-error' : ''}
        />
        {errors.username && <span className="error-msg">{errors.username}</span>}
      </div>

      <div className="form-group">
        <label>Password *</label>
        <div className="input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Min 8 characters"
            value={formData.password || ''}
            onChange={(e) => updateFormData('password', e.target.value)}
            className={errors.password ? 'input-error' : ''}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        {errors.password && <span className="error-msg">{errors.password}</span>}
      </div>

      <div className="form-group">
        <label>Confirm Password *</label>
        <div className="input-wrapper">
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Re-enter your password"
            value={formData.confirmPassword || ''}
            onChange={(e) => updateFormData('confirmPassword', e.target.value)}
            className={errors.confirmPassword ? 'input-error' : ''}
          />
          <span
            className="toggle-password"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? '🙈' : '👁️'}
          </span>
        </div>
        {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}
      </div>

      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={formData.agreeTerms || false}
            onChange={(e) => updateFormData('agreeTerms', e.target.checked)}
          />
          I agree to the Terms and Conditions *
        </label>
        {errors.agreeTerms && <span className="error-msg">{errors.agreeTerms}</span>}
      </div>
    </div>
  );
};

export default Step3Account;