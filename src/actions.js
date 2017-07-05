export const SET_PLAYER_PIECE = 'SET_PLAYER_PIECE';

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