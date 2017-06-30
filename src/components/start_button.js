import React from 'react';

const StartButton = ({ letter }) => {

  const handleHover = (enter) => {
    // selector is opposite of letter
    const selector = letter === 'X' ? 'O' : 'X';
  }

  return (
    <div
      className={"start-button " + letter}
      onMouseEnter={handleHover(true)}
      onMouseLeave={handleHover(false)}>
      <span>{letter}</span>
      <p>{letter === 'X' ? "You Start" : "Minimax Starts"}</p>
    </div>
  );
};

export default StartButton;