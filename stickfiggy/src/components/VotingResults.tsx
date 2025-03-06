import React, { useState, useEffect } from 'react';
import './VotingResults.css';

interface Vote {
  _id: string;
  feature: string;
  count: number;
  createdAt: string;
}

const VotingResults: React.FC = () => {
  const [votes, setVotes] = useState<Vote[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        // Only show loading on initial fetch
        if (votes.length === 0) {
          setLoading(true);
        }
        
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        
        // Initialize votes if they don't exist
        await fetch(`${API_URL}/api/votes/init`);
        
        // Fetch all votes
        const response = await fetch(`${API_URL}/api/votes`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch votes');
        }
        
        const data = await response.json();
        
        // Only update state if data has changed
        if (JSON.stringify(data) !== JSON.stringify(votes)) {
          setVotes(data);
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching votes:', err);
        setError('Failed to load voting results. Please try again later.');
        
        // Only use mock data if we don't already have data
        if (votes.length === 0) {
          setVotes([
            { _id: '1', feature: 'Glasses', count: 12, createdAt: new Date().toISOString() },
            { _id: '2', feature: 'Teeth', count: 8, createdAt: new Date().toISOString() },
            { _id: '3', feature: 'Shoes', count: 15, createdAt: new Date().toISOString() },
            { _id: '4', feature: 'Backpack', count: 10, createdAt: new Date().toISOString() }
          ]);
        }
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchVotes();
    
    // Poll for updates every 30 seconds instead of 5
    const interval = setInterval(fetchVotes, 30000);
    
    return () => clearInterval(interval);
  }, [votes]); // Add votes as dependency to prevent unnecessary re-renders

  // Calculate total votes
  const totalVotes = votes.reduce((sum, vote) => sum + vote.count, 0);

  return (
    <div className="voting-results">
      <h2>Current Voting Results</h2>
      
      {loading && <div className="loading">Loading results...</div>}
      
      {error && <div className="error">{error}</div>}
      
      {!loading && !error && (
        <>
          <div className="total-votes">Total Votes: {totalVotes}</div>
          
          <div className="results-container">
            {votes.map(vote => (
              <div key={vote._id} className="result-item">
                <div className="feature-name">{vote.feature}</div>
                <div className="progress-container">
                  <div 
                    className="progress-bar" 
                    style={{ 
                      width: `${totalVotes > 0 ? (vote.count / totalVotes) * 100 : 0}%` 
                    }}
                  ></div>
                </div>
                <div className="vote-count">{vote.count} votes</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default VotingResults;
