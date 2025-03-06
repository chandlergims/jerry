import React from 'react';
import './Home.css';
import StickFigure from './StickFigure';
import VotingPanel from './VotingPanel';
import VotingLogs from './VotingLogs';
import VotingResults from './VotingResults';
import FeatureShowcase from './FeatureShowcase';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="results-wrapper">
        <VotingResults />
      </div>
      <div className="home-container">
        <div className="logs-container">
          <VotingLogs />
        </div>
        <div className="content-wrapper">
          <div className="mascot-showcase">
            <StickFigure />
          </div>
        </div>
        <div className="voting-container">
          <VotingPanel />
        </div>
      </div>
      <div className="showcase-wrapper">
        <FeatureShowcase />
      </div>
    </div>
  );
};

export default Home;
