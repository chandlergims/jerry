import React, { useState, useEffect } from 'react';
import './VotingPanel.css';

const VotingPanel: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  // Check if user has already voted
  useEffect(() => {
    const votedFeature = localStorage.getItem('stickfiggy_voted_feature');
    if (votedFeature) {
      setHasVoted(true);
      setSubmitSuccess(true);
    }
  }, []);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    setSubmitError(null);
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedOption) {
      setSubmitError('Please select an option before submitting');
      return;
    }
    
    // Check if user has already voted
    if (localStorage.getItem('stickfiggy_voted_feature')) {
      setSubmitError('You have already voted. Thank you for your participation!');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/votes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feature: selectedOption }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit vote');
      }
      
      // Save vote to local storage
      localStorage.setItem('stickfiggy_voted_feature', selectedOption);
      localStorage.setItem('stickfiggy_voted_at', new Date().toISOString());
      
      setSubmitSuccess(true);
      setHasVoted(true);
    } catch (error) {
      console.error('Error submitting vote:', error);
      setSubmitError('Failed to submit vote. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // No reset function needed anymore

  return (
    <div className="voting-panel">
      <h2>Vote for Next Feature</h2>
      
      {submitSuccess && (
        <div className="success-message">
          {hasVoted ? 'Thank you for your vote!' : 'Your vote has been submitted successfully!'}
        </div>
      )}
      
      {submitError && (
        <div className="error-message">
          {submitError}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="voting-options">
          <label className="option-label" htmlFor="option1">
            <input 
              type="radio" 
              id="option1" 
              name="feature" 
              value="Glasses" 
              checked={selectedOption === "Glasses"}
              onChange={handleOptionChange}
              disabled={isSubmitting || hasVoted}
            />
            <span className="option-text">Glasses</span>
          </label>
          
          <label className="option-label" htmlFor="option2">
            <input 
              type="radio" 
              id="option2" 
              name="feature" 
              value="Teeth" 
              checked={selectedOption === "Teeth"}
              onChange={handleOptionChange}
              disabled={isSubmitting || hasVoted}
            />
            <span className="option-text">Teeth</span>
          </label>
          
          <label className="option-label" htmlFor="option3">
            <input 
              type="radio" 
              id="option3" 
              name="feature" 
              value="Shoes" 
              checked={selectedOption === "Shoes"}
              onChange={handleOptionChange}
              disabled={isSubmitting || hasVoted}
            />
            <span className="option-text">Shoes</span>
          </label>
          
          <label className="option-label" htmlFor="option4">
            <input 
              type="radio" 
              id="option4" 
              name="feature" 
              value="Backpack" 
              checked={selectedOption === "Backpack"}
              onChange={handleOptionChange}
              disabled={isSubmitting || hasVoted}
            />
            <span className="option-text">Backpack</span>
          </label>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting || !selectedOption || hasVoted}
        >
          {isSubmitting ? 'Submitting...' : hasVoted ? 'Already Voted' : 'Submit Vote'}
        </button>
      </form>
    </div>
  );
};

export default VotingPanel;
