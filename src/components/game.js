import React from 'react';
import GameBoard from '../containers/game_board';
import Minimax from './minimax.js';
import Modal from '../containers/modal.js';

const Game = () => (
  <div className="game">
    <Minimax />
    <GameBoard />
    <Modal />
  </div>
);

export default Game;