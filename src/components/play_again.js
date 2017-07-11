import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

const PlayAgain = ({ status, openModal }) => {
  // save status as boolean
  this.gameStatus = status === 'win' ? true : false;

  return (
    <ReactModal
      isOpen={openModal}
      className="content"
      overlayClassName="overlay"
      contentLabel={"Play Again"}>
      <h1 style={{ color: this.gameStatus ? '#e06c75' : '#98c378' }}>
        {this.gameStatus ? 'You Lose' : 'Draw'}
      </h1>
      <h2>Play Again?</h2>
      <div className="choice">
        <h3>YES</h3>
        <Link to="/"><h3>NO</h3></Link>
      </div>
    </ReactModal>
  );
}

export default PlayAgain;