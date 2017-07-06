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
      console.log(action.payload.request);
      // deal with response here
      return state;
    default:
      return state;
  }
}

function isPlayerTurn(state = null, action) {
  switch (action.type) {
    case SET_PLAYER_PIECE:
      return (action.payload.isPlayerTurn);
    default:
      return state;
  }
}

export default combineReducers({ data, isPlayerTurn });