import React from 'react';
import $ from 'jquery';
import evilBot from '../images/evil-bot.svg';

const StartButton = ({ letter }) => {
  const opposite = letter === 'X' ? 'O' : 'X';

  const toggleHover = (isHoveredIn) => {
    // finish all animations to avoid stacking
    $("*:animated").finish();
    // selected letter turns green
    $(`.${letter}`).toggleClass("green");
    // opposite letter turns red
    $(`.${opposite}`).toggleClass("red");
    // call appropriate function depending on hover state
    isHoveredIn ? hoverIn() : hoverOut();
  }

  const hoverIn = () => {
    // opposite paragraph disappears
    $(`.${opposite} > p`).fadeToggle(200, function () {
      //opposite bot appears
      $(`.${opposite} > img`).fadeToggle(100);
    });
  }

  const hoverOut = () => {
    //opposite bot disppears
    $(`.${opposite} > img`).fadeToggle(200, function () {
      // opposite paragraph appears
      $(`.${opposite} > p`).fadeToggle(100);
    });
  }

  return (
    <div
      className={`start-button ${letter}`}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}>
      <span>{letter}</span>
      <p>{letter === 'X' ? "First Turn" : "Second Turn"}</p>
      <img src={evilBot} alt={"Evil robot face"} height={25} width={25} style={{ display: 'none' }} />
    </div>
  );
};

export default StartButton;