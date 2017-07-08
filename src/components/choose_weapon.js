import React from 'react';
import { Link } from 'react-router-dom';
import StartButton from './start_button';
import { connect } from 'react-redux';
import { setPiece } from '../actions';

// dispatch comes from connect and is used within the component to dispatch actions
// there is no container because the component is not modified by state
// it is directly connected to the store to allow onClick to dispatch an action
let ChooseWeapon = ({ dispatch }) => {
  return (
    <div className="choose-weapon">
      <h1>Choose your weapon.</h1>
      <div className="buttons-container">
        <Link to="/game" onClick={() => dispatch(setPiece('x'))}>
          <StartButton letter='X' />
        </Link>
        <Link to="/game" onClick={() => dispatch(setPiece('o'))}>
          <StartButton letter='O' />
        </Link>
      </div>
    </div>
  );
}
ChooseWeapon = connect()(ChooseWeapon);

export default ChooseWeapon;