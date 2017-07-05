import { SET_PLAYER_PIECE } from './actions';

export default function setInitialGameState(state, action) {
  switch (action.type) {
    case SET_PLAYER_PIECE:
      return {
        ...state,
        isPlayerTurn: action.payload.isPlayerTurn,
        data: {
          ...state.data,
          player_piece: action.payload.player_piece,
          opponent_piece: action.payload.opponent_piece
        }
      }
    default:
      return state;
  }
}