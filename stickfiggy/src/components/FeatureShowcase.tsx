import React from 'react';
import './FeatureShowcase.css';

const FeatureShowcase: React.FC = () => {
  // Features to showcase
  const features = [
    { name: 'Glasses', image: '/glasses.png' },
    { name: 'Teeth', image: '/teeth.png' },
    { name: 'Shoes', image: '/shoes.png' },
    { name: 'Backpack', image: '/backpack.png' }
  ];

  return (
    <div className="feature-showcase">
      <h2>Available Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-image">
              <img src={feature.image} alt={feature.name} />
            </div>
            <div className="feature-name">{feature.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureShowcase;
