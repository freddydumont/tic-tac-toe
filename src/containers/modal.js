import { connect } from 'react-redux';
import PlayAgain from '../components/play_again';

// get state from store and pass it to component
const mapStateToProps = state => {
  return {
    status: state.data.status
  }
}

// pass sendRequest to component
// const mapDispatchToProps = dispatch => {
//   return {
//     onComponentMount: data => {
//       dispatch(sendRequest(data));
//     },
//     onCellClick: i => {
//       dispatch(playTurn(i));
//     }
//   }
// }

const Modal = connect(mapStateToProps)(PlayAgain)

export default Modal;