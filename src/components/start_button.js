import React from 'react';

const StartButton = ({ letter }) => {
  return (
    <div className="start-button">
      <span>{letter}</span>
      <p>{letter === 'X' ? "You Start" : "Robot Starts"}</p>
    </div>
  );
};

export default StartButton;