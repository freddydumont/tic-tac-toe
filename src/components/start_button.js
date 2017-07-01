import React from 'react';
import $ from 'jquery';
import evilBot from '../images/evil-bot.svg';

const StartButton = ({ letter }) => {

  const opposite = letter === 'X' ? 'O' : 'X';

  const toggleHover = () => {
    // selected letter turns green
    $(`.${letter}`).toggleClass("green");
    // opposite letter turns red
    $(`.${opposite}`).toggleClass("red");
  }

  const hoverIn = () => {
    toggleHover();
    // opposite paragraph disappears
    $(`.${opposite} > p`).fadeToggle(400, function () {
      //opposite bot appears
      $(`.${opposite} > img`).fadeToggle();
    });
  }

  const hoverOut = () => {
    toggleHover();
    //opposite bot appears
    $(`.${opposite} > img`).fadeToggle(400, function () {
      // opposite paragraph disappears
      $(`.${opposite} > p`).fadeToggle();
    });
  }

  return (
    <div
      className={`start-button ${letter}`}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}>
      <span>{letter}</span>
      <p>{letter === 'X' ? "You Start" : "Minimax Starts"}</p>
      <img src={evilBot} alt={"Evil robot face"} height={25} width={25} style={{ display: 'none' }} />
    </div>
  );
};

export default StartButton;