import { connect } from 'react-redux';
import GameBoard from '../components/game_board';
import { sendRequest, playTurn } from '../actions';

// get state from store and pass it to component
const mapStateToProps = state => {
  return {
    isPlayerTurn: state.isPlayerTurn,
    data: state.data
  }
}

// pass sendRequest to component
const mapDispatchToProps = dispatch => {
  return {
    onComponentMount: data => {
      dispatch(sendRequest(data));
    },
    onCellClick: i => {
      dispatch(playTurn(i));
    }
  }
}

const Game = connect(mapStateToProps, mapDispatchToProps)(GameBoard)

export default Game;