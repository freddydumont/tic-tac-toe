import React from 'react';

const StartButton = ({ letter }) => {

  const opposite = letter === 'X' ? 'O' : 'X';

  const toggleHover = () => {
    // this.setState({ hover: !this.state.hover });
    document.querySelector(`.${letter}`).classList.toggle("green");
    document.querySelector(`.${opposite}`).classList.toggle("red");
  }

  return (
    <div
      className={`start-button ${letter}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <span>{letter}</span>
      <p>{letter === 'X' ? "You Start" : "Minimax Starts"}</p>
    </div>
  );
};

export default StartButton;