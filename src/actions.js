import axios from 'axios';

export const SET_PLAYER_PIECE = 'SET_PLAYER_PIECE';
export const SEND_REQUEST = 'SEND_REQUEST';
export const USER_TURN = 'USER_TURN';
export const RESET_STATE = 'RESET_STATE';
export const GAME_OVER = 'GAME_OVER';
export const RESET_GAME = 'RESET_GAME';

export function endGame() {
  return {
    type: GAME_OVER
  }
}

export function resetGame(initialGameState) {
  return {
    type: RESET_GAME,
    payload: initialGameState
  }
}

export function resetState() {
  return {
    type: RESET_STATE
  }
}

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
  // have to use a proxy server because api doesnt seem to support CORS
  const url = 'https://cors-everywhere.herokuapp.com/http://perfecttictactoe.herokuapp.com/api/v2/play';
  const request = axios.post(url, data, {});

  return {
    type: SEND_REQUEST,
    payload: request
  }
}

export function playTurn(i) {
  return {
    type: USER_TURN,
    payload: i
  }
}