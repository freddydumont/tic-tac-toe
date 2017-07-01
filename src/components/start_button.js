import React from 'react';
import $ from 'jquery';
import evilBot from '../images/evil-bot.svg';

const StartButton = ({ letter }) => {

  const opposite = letter === 'X' ? 'O' : 'X';

  const toggleTextUnderO = () => {
    if (letter === 'O') {
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
  }

  const toggleHover = () => {
    // selected letter turns green
    $(`.${letter}`).toggleClass("green");
    // opposite letter turns red
    $(`.${opposite}`).toggleClass("red");

    toggleTextUnderO();
  }

  const hoverIn = () => {
    toggleHover();
    // opposite paragraph disappears
    $(`.${opposite} > p`).fadeToggle(250, function () {
      //opposite bot appears
      $(`.${opposite} > img`).fadeToggle(250);
    });
  }

  const hoverOut = () => {
    toggleHover();
    //opposite bot appears
    $(`.${opposite} > img`).fadeToggle(250, function () {
      // opposite paragraph disappears
      $(`.${opposite} > p`).fadeToggle(250);
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