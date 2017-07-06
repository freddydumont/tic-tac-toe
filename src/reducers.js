import { combineReducers } from 'redux';
import { SET_PLAYER_PIECE, SEND_REQUEST } from './actions';

function data(state = {}, action) {
  switch (action.type) {
    case SET_PLAYER_PIECE:
      return {
        ...state,
        player_piece: action.payload.player_piece,
        opponent_piece: action.payload.opponent_piece
      }
    case SEND_REQUEST:
      // deal with errors here at some point
      let response = JSON.parse(action.payload.request.response);
      return {
        ...state,
        board: response.data.board
      }
    default:
      return state;
  }
}

function isPlayerTurn(state = null, action) {
  switch (action.type) {
    case SET_PLAYER_PIECE:
      return (action.payload.isPlayerTurn);
    case SEND_REQUEST:
      // after request is completed, reverse isPlayerTurn
      return (!state);
    default:
      return state;
  }
}

export default combineReducers({ data, isPlayerTurn });