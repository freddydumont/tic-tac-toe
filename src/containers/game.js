import { connect } from 'react-redux';
import GameBoard from '../components/game_board';
import { sendRequest } from '../actions';

// get state from store and pass it to component
const mapStateToProps = state => {
  return {
    board: state.data.board
  }
}

// pass sendRequest to component
const mapDispatchToProps = dispatch => {
  return {
    onComponentMount: data => {
      dispatch(sendRequest(data));
    }
  }
}

const Game = connect(mapStateToProps, mapDispatchToProps)(GameBoard)

export default Game;