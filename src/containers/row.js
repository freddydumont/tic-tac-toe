import { connect } from 'react-redux';
import GameRow from '../components/game_row';
import { playTurn } from '../actions';

// get state from store and pass it to component
const mapStateToProps = state => {
  return {
    isPlayerTurn: state.isPlayerTurn
  }
}

// pass sendRequest to component
const mapDispatchToProps = dispatch => {
  return {
    onCellClick: i => {
      dispatch(playTurn(i));
    }
  }
}

const Row = connect(mapStateToProps, mapDispatchToProps)(GameRow)

export default Row;