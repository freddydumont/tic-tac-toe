import React from 'react';
import evilBot from '../images/evil-bot.svg';

const StartButton = ({ letter }) => {

  const opposite = letter === 'X' ? 'O' : 'X';

  const toggleHover = () => {
    // selected letter turns green
    document.querySelector(`.${letter}`).classList.toggle("green");
    // opposite letter turns red
    document.querySelector(`.${opposite}`).classList.toggle("red");
    // opposite paragraph disappears
    document.querySelector(`.${opposite} > p`).classList.toggle("hide");
    // evilBot appears under opposite paragraph
    document.querySelector(`.${opposite} > img`).classList.toggle("appear");
    // paragraph order is second
    document.querySelector(`.${opposite} > p`).classList.toggle("order");
  }

  return (
    <div
      className={`start-button ${letter}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <span>{letter}</span>
      <p>{letter === 'X' ? "You Start" : "Minimax Starts"}</p>
      <img src={evilBot} alt={"Evil robot face"} height={25} width={25} />
    </div>
  );
};

export default StartButton;