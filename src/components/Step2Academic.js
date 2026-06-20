import React from 'react';

const Step2Academic = ({ formData, updateFormData, errors }) => {
  return (
    <div className="step-content">
      <h2 className="step-title">🎓 Academic Information</h2>
      <p className="step-subtitle">Tell us about your studies</p>

      <div className="form-group">
        <label>College Name *</label>
        <input
          type="text"
          placeholder="Enter your college name"
          value={formData.college || ''}
          onChange={(e) => updateFormData('college', e.target.value)}
          className={errors.college ? 'input-error' : ''}
        />
        {errors.college && <span className="error-msg">{errors.college}</span>}
      </div>

      <div className="form-group">
        <label>Branch / Department *</label>
        <select
          value={formData.branch || ''}
          onChange={(e) => updateFormData('branch', e.target.value)}
          className={errors.branch ? 'input-error' : ''}
        >
          <option value="">Select your branch</option>
          <option value="CSE">Computer Science Engineering</option>
          <option value="IT">Information Technology</option>
          <option value="ECE">Electronics & Communication</option>
          <option value="ME">Mechanical Engineering</option>
          <option value="CE">Civil Engineering</option>
          <option value="EE">Electrical Engineering</option>
          <option value="Other">Other</option>
        </select>
        {errors.branch && <span className="error-msg">{errors.branch}</span>}
      </div>

      <div className="form-group">
        <label>Current Year *</label>
        <select
          value={formData.year || ''}
          onChange={(e) => updateFormData('year', e.target.value)}
          className={errors.year ? 'input-error' : ''}
        >
          <option value="">Select your year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
        {errors.year && <span className="error-msg">{errors.year}</span>}
      </div>

      <div className="form-group">
        <label>Roll Number *</label>
        <input
          type="text"
          placeholder="Enter your roll number"
          value={formData.rollNumber || ''}
          onChange={(e) => updateFormData('rollNumber', e.target.value)}
          className={errors.rollNumber ? 'input-error' : ''}
        />
        {errors.rollNumber && <span className="error-msg">{errors.rollNumber}</span>}
      </div>
    </div>
  );
};

export default Step2Academic;