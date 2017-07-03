import React from 'react';
import { Link } from 'react-router-dom';
import StartButton from './start_button';

const ChooseWeapon = ({ ready }) => {
  //if (ready) {
  return (
    <div>
      <h1>Choose your weapon.</h1>
      <div className="buttons-container">
        <Link to="/game">
          <StartButton letter='X' />
        </Link>
        <Link to="/game">
          <StartButton letter='O' />
        </Link>
      </div>
    </div>
  );
  //} else return null;
}

export default ChooseWeapon;