import { connect } from 'react-redux';
import GameBoard from '../components/game_board';

// get state from store and pass it to component
const mapStateToProps = state => {
  return {
    board: state.data.board
  }
}

const Game = connect(mapStateToProps)(GameBoard)

export default Game;