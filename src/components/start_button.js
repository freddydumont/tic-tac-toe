import React from 'react';

const StartButton = ({ letter }) => {
  return (
    <div>
      <span className="big-letter">{letter}</span>
      <p>{letter === 'X' ? "You Start" : "Robot Starts"}</p>
    </div>
  );
};

export default StartButton;