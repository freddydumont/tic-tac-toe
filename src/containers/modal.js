import { connect } from 'react-redux';
import PlayAgain from '../components/play_again';
import { resetGame } from '../actions';

const mapStateToProps = state => {
  return {
    status: state.data.status,
    openModal: state.openModal,
    initialGameState: state.initialGameState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetGame: initialGameState => dispatch(resetGame(initialGameState))
  }
}

const Modal = connect(mapStateToProps, mapDispatchToProps)(PlayAgain)

export default Modal;