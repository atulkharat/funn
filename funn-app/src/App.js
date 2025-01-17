import React, { useState } from 'react';
import './SubmitButton.css';

const SubmitButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseMove = (e) => {
    if (!isClicked) {
      const newX = Math.random() * window.innerWidth;
      const newY = Math.random() * window.innerHeight;

      setPosition({ x: newX, y: newY });
    }
  };

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      // Additional logic or API calls can be added here
    }
  };

  return (
    
    
    <div
      className={`button-container ${isClicked ? 'clicked' : ''}`}
      onMouseMove={handleMouseMove}
    >
      <h1> i dare you to ckick it!!!</h1>
      <button
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'left 0.5s, top 0.5s', // Add transition for smooth movement
        }}
        onClick={handleClick}
        disabled={isClicked}
      >
        {isClicked ? 'Clicked!' : 'Submit'}
      </button>
    </div>
  );
};

export default SubmitButton;
