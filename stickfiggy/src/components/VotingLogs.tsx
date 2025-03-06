import React from 'react';
import './VotingLogs.css';

const VotingLogs: React.FC = () => {
  // Empty logs for now - will be populated from backend in the future
  const logs: any[] = [];

  return (
    <div className="voting-logs">
      <h2>Previous Voting Results</h2>
      
      {logs.length > 0 ? (
        <div className="logs-list">
          {logs.map(log => (
            <div key={log.id} className={`log-item ${log.winner ? 'winner' : ''}`}>
              <div className="log-date">{log.date}</div>
              <div className="log-feature">{log.feature}</div>
              <div className="log-votes">{log.votes} votes</div>
              {log.winner && <div className="winner-badge">Winner</div>}
            </div>
          ))}
        </div>
      ) : (
        <div className="no-logs-message">
          <p>No previous voting results available yet.</p>
          <p>Results will appear here when voting periods end.</p>
        </div>
      )}
    </div>
  );
};

export default VotingLogs;
