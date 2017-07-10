import React from 'react';
import ReactModal from 'react-modal';

const PlayAgain = ({ status }) => {
  // save status as boolean
  this.gameStatus = status === 'win' ? true : false;

  return (
    <ReactModal
      isOpen={true}
      className="content"
      overlayClassName="overlay"
      contentLabel={"Play Again"}>
      <h1 style={{ color: this.gameStatus ? '#e06c75' : '#98c378' }}>
        {this.gameStatus ? 'You Lose' : 'Draw'}
      </h1>
      <h2>Play Again?</h2>
      <div className="choice">
        <h3>YES</h3>
        <h3>NO</h3>
      </div>
    </ReactModal>
  );
}

export default PlayAgain;