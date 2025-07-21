import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="lava-lamp-container">
        <div className="lava-lamp">
          <div className="lava-bubble bubble1"></div>
          <div className="lava-bubble bubble2"></div>
          <div className="lava-bubble bubble3"></div>
          <div className="lava-bubble bubble4"></div>
          <div className="lava-bubble bubble5"></div>
        </div>
      </div>
      <div className="loading-text">
        <span className="neon-text">Loading Portfolio</span>
        <div className="loading-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;