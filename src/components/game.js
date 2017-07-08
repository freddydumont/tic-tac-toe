import React from 'react';
import GameBoard from '../containers/game_board';
import Minimax from './minimax.js';

const Game = () => (
  <div className="game">
    <Minimax />
    <GameBoard />
  </div>
);

export default Game;