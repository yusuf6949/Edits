import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contact.css';
import backimg from './nhl934.png';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setStep(prevStep => prevStep + 1);
      setError('');
    }
  };

  const validateCurrentStep = () => {
    switch(step) {
      case 1:
        if (!formData.name.trim()) {
          setError('Please enter your name');
          return false;
        }
        break;
      case 2:
        if (!formData.email.trim()) {
          setError('Please enter your email');
          return false;
        }
        break;
      case 3:
        // Website is optional, no validation needed
        break;
      case 4:
        if (!formData.budget) {
          setError('Please select a budget');
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCurrentStep()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const goBackToHome = () => {
    navigate('/');
    window.location.reload();  // This forces the page to reload
  };
  

  if (isSubmitted) {
    return (
      <div className="rootcontainer">
        <div className="form-container">
          <h2>Thank You!</h2>
          <p>Thank you {formData.name} for reaching out to us. We have received your details and will reply to you as soon as possible.</p>
          <button onClick={goBackToHome}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="rootcontainer">
      <button className="back-button" onClick={goBackToHome}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back
      </button>
      <div className="form-container">
        <form onSubmit={handleSubmit} id="multi-step-form">
          {error && <div className="error-message">{error}</div>}
          <div className={`question ${step === 1 ? 'active' : ''}`} id="q1">
            <div className="question-number">1 →</div>
            <label htmlFor="name">Hello, what's your name?*</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required 
              placeholder="Type your answer here..."
              value={formData.name}
              onChange={handleInputChange}
            />
            <button type="button" onClick={nextStep}>Next</button>
          </div>

          <div className={`question ${step === 2 ? 'active' : ''}`} id="q2">
            <div className="question-number">2 →</div>
            <label htmlFor="email">What's the best email address to reach you at?*</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required 
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            <button type="button" onClick={nextStep}>Next</button>
          </div>

          <div className={`question ${step === 3 ? 'active' : ''}`} id="q3">
            <div className="question-number">3 →</div>
            <label htmlFor="website">What is the website for your business?</label>
            <input 
              type="url" 
              id="website" 
              name="website"
              placeholder="https://"
              value={formData.website}
              onChange={handleInputChange}
            />
            <button type="button" onClick={nextStep}>Next</button>
          </div>

          <div className={`question ${step === 4 ? 'active' : ''}`} id="q4">
            <div className="question-number">4 →</div>
            <label htmlFor="budget">What is your budget for this project?*</label>
            <select 
              id="budget" 
              name="budget"
              required
              value={formData.budget}
              onChange={handleInputChange}
            >
              <option value="" disabled>Choose...</option>
              <option value="<20000">&lt;$10,000</option>
              <option value="20000-40000">$20,000 - $40,000</option>
              <option value="40001-80000">$40,001 - $80,000</option>
              <option value="80000+">$80k+</option>
            </select>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="footer">
          Powered by NextHomeLabs
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;