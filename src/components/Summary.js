import React from 'react';

const Summary = ({ formData, onSubmit, onEdit }) => {
  return (
    <div className="step-content">
      <h2 className="step-title">🎉 Review Your Details</h2>
      <p className="step-subtitle">Please confirm everything looks correct</p>

      <div className="summary-section">
        <h3>👤 Personal Information</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="summary-label">Full Name</span>
            <span className="summary-value">{formData.fullName}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Email</span>
            <span className="summary-value">{formData.email}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Phone</span>
            <span className="summary-value">{formData.phone}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Date of Birth</span>
            <span className="summary-value">{formData.dob || 'Not provided'}</span>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <h3>🎓 Academic Information</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="summary-label">College</span>
            <span className="summary-value">{formData.college}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Branch</span>
            <span className="summary-value">{formData.branch}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Year</span>
            <span className="summary-value">{formData.year} Year</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Roll Number</span>
            <span className="summary-value">{formData.rollNumber}</span>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <h3>🔐 Account Details</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="summary-label">Username</span>
            <span className="summary-value">{formData.username}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Password</span>
            <span className="summary-value">••••••••</span>
          </div>
        </div>
      </div>

      <div className="summary-buttons">
        <button className="btn-edit" onClick={onEdit}>
          ✏️ Edit Details
        </button>
        <button className="btn-submit" onClick={onSubmit}>
          ✅ Submit Form
        </button>
      </div>
    </div>
  );
};

export default Summary;