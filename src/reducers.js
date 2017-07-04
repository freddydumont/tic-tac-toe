import { CHOOSE_SYMBOL } from './actions';

export default function playerSymbol(state = null, action) {
  switch (action.type) {
    case CHOOSE_SYMBOL:
      return {
        playerSymbol: action.playerSymbol,
        isPlayerTurn: action.playerSymbol === 'X' ? true : false
      }

    default:
      return state;
  }
}