import React from 'react';
import $ from 'jquery';
import evilBot from '../images/evil-bot.svg';

const StartButton = ({ letter }) => {

  const opposite = letter === 'X' ? 'O' : 'X';

  const toggleTextUnderO = () => {
    const O = $(`.${letter} > p`);
    // paragraph fades out
    O.fadeToggle(250, function () {
      // toggle text-color
      O.toggleClass("green");
      // toggle text
      O.text() === "Minimax Starts" ? O.text("You Go Second")
        : O.text("Minimax Starts");
      //paragraph fades in
      O.fadeToggle(250);
    });
  }

  const toggleHover = (isHoveredIn) => {
    // selected letter turns green
    $(`.${letter}`).toggleClass("green");
    // opposite letter turns red
    $(`.${opposite}`).toggleClass("red");
    // call appropriate function
    isHoveredIn ? hoverIn() : hoverOut();
    // if letter is O
    if (letter === 'O') {
      toggleTextUnderO();
    }
  }

  const hoverIn = () => {
    // opposite paragraph disappears
    $(`.${opposite} > p`).fadeToggle(250, function () {
      //opposite bot appears
      $(`.${opposite} > img`).fadeToggle(250);
    });
  }

  const hoverOut = () => {
    //opposite bot appears
    $(`.${opposite} > img`).fadeToggle(250, function () {
      // opposite paragraph disappears
      $(`.${opposite} > p`).fadeToggle(250);
    });
  }

  return (
    <div
      className={`start-button ${letter}`}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}>
      <span>{letter}</span>
      <p>{letter === 'X' ? "You Start" : "Minimax Starts"}</p>
      <img src={evilBot} alt={"Evil robot face"} height={25} width={25} style={{ display: 'none' }} />
    </div>
  );
};

export default StartButton;