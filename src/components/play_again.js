import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

const PlayAgain = ({ status, openModal, resetGame, initialGameState }) => {
  return (
    <ReactModal
      isOpen={openModal}
      className="content"
      overlayClassName="overlay"
      contentLabel={"Play Again"}
      closeTimeoutMS={500}>
      {/* Display proper title depending on status
        * Make title invisible for transition */}
      <h1 style={{ color: status === 'win' ? '#e06c75' : status === 'draw' ? '#98c378' : 'rgba(0, 0, 0, 0)' }}>
        {status === 'win' ? 'You Lose' : 'Draw'}
      </h1>
      <h2>Play Again?</h2>
      <div className="choice">
        {/* YES resets the game and NO sends user back to home page */}
        <h3 onClick={() => resetGame(initialGameState)}>YES</h3>
        <Link to="/"><h3>NO</h3></Link>
      </div>
    </ReactModal>
  );
}

export default PlayAgain;