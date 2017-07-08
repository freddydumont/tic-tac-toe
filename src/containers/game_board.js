import { connect } from 'react-redux';
import Board from '../components/board';
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

const GameBoard = connect(mapStateToProps, mapDispatchToProps)(Board)

export default GameBoard;