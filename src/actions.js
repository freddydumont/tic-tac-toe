import axios from 'axios';

export const SET_PLAYER_PIECE = 'SET_PLAYER_PIECE';
export const SEND_REQUEST = 'SEND_REQUEST';

export function setPiece(opponent_piece) {
  return {
    type: SET_PLAYER_PIECE,
    payload: {
      // The way the API is set up, player refers to the bot
      // and opponent refers to the actual human player
      // because it's from the current player's perspective.
      // Since the the API is only responsible for the bot's turns, bot is the player
      player_piece: opponent_piece === 'x' ? 'o' : 'x',
      opponent_piece,
      isPlayerTurn: opponent_piece === 'x' ? false : true
    }
  }
}

export function sendRequest(data) {
  // works with cors-everywhere, doesnt otherwise
  // maybe related to origin being localhost
  // try without in production build
  const url = 'https://cors-everywhere.herokuapp.com/http://perfecttictactoe.herokuapp.com/api/v2/play';
  const request = axios.post(url, data, {});

  return {
    type: SEND_REQUEST,
    payload: request
  }
}