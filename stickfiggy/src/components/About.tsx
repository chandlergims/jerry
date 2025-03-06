import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Jerry</h1>
        
        <div className="about-section">
          <h2>The Vision</h2>
          <p>
            Jerry is not just a stick figure. Jerry is a movement. We're creating the most memorable 
            and distinctive mascot on Solana through community-driven customization.
          </p>
        </div>
        
        <div className="about-section">
          <h2>The Process</h2>
          <p>
            Over a month-long period, we're letting the community vote on Jerry's features. 
            Each week, a new feature will be added based on your votes. Glasses? Teeth? Shoes? Backpack? 
            You decide what makes Jerry unique.
          </p>
        </div>
        
        <div className="about-section">
          <h2>The Future</h2>
          <p>
            At the end of our customization journey, Jerry will be minted as an NFT on the Solana blockchain. 
            The proceeds from the sale will be distributed to all holders of our token, creating 
            real value for our community members.
          </p>
        </div>
        
        <div className="about-section">
          <h2>The Community</h2>
          <p>
            By participating in Jerry's evolution, you're not just voting on features - you're becoming 
            part of a vibrant community that values creativity, fun, and the possibilities of web3 technology.
          </p>
          <p>
            Join us as we build, customize, and eventually immortalize Jerry on the blockchain!
          </p>
        </div>
        
        <div className="about-cta">
          <a href="/" className="cta-button">Vote Now</a>
        </div>
      </div>
    </div>
  );
};

export default About;
