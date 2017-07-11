import { combineReducers } from 'redux';
import { SET_PLAYER_PIECE, SEND_REQUEST, USER_TURN, RESET_STATE, GAME_OVER, RESET_GAME }
  from './actions';
// initiate here to work with RESET_STATE
import initialBoard from './initial_board.json';

function data(state = initialBoard, action) {
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
        board: response.data.board,
        status: response.data.status,
        winner: response.data.winner
      }
    case USER_TURN:
      // http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
      // #updating-an-item-in-an-array
      return {
        ...state,
        board: state.board.map((item, index) => {
          if (index !== action.payload) {
            // This isn't the item we care about - keep it as-is
            return item;
          }
          // Otherwise, this is the one we want - return an updated value
          return {
            ...item,
            value: state.opponent_piece
          };
        })
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
      // if the game status is draw or win, return null
      // to prevent user from being able to click cells
      let response = JSON.parse(action.payload.request.response);
      let status = response.data.status;
      if (status === "win" || status === "draw") {
        return null;
      }
      // otherwise switch turn
      return !state;
    case USER_TURN:
      // after user has played his turn, reverse isPlayerTurn
      return !state;
    default:
      return state;
  }
}

// save initial game state to reset game when user plays again
function initialGameState(state = null, action) {
  switch (action.type) {
    case SET_PLAYER_PIECE:
      return {
        openModal: false,
        isPlayerTurn: action.payload.isPlayerTurn,
        data: {
          opponent_piece: action.payload.opponent_piece,
          player_piece: action.payload.player_piece,
          board: initialBoard.board
        }
      }
    default:
      return state;
  }
}

function openModal(state = false, action) {
  switch (action.type) {
    case GAME_OVER:
      return true;
    default:
      return state;
  }
}

// https://stackoverflow.com/questions/35622588/
// how-to-reset-the-state-of-a-redux-store
// combine top-level reducers
const appReducer = combineReducers({ data, isPlayerTurn, initialGameState, openModal });
// write a new rootReducer wrapping appReducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case RESET_GAME:
      // combine initialGameState with itself as a key:value to reset game more than once
      return appReducer({
        ...action.payload,
        initialGameState: state.initialGameState
      }, action);
    case RESET_STATE:
      // reducers return the initial state when they are called with
      // undefined as the first argument
      state = undefined;
    // eslint-disable-next-line
    default:
      return appReducer(state, action);
  }
}

export default rootReducer;