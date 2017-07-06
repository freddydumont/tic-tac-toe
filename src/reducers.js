import { combineReducers } from 'redux';
import { SET_PLAYER_PIECE, SEND_REQUEST, USER_TURN } from './actions';

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
    case USER_TURN:
      // update store with new board received from component
      return {
        ...state,
        board: action.payload
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
    case USER_TURN:
      // after request is completed, reverse isPlayerTurn
      // same after user has played his turn
      return (!state);
    default:
      return state;
  }
}

export default combineReducers({ data, isPlayerTurn });