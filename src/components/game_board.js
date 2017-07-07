import React, { Component } from 'react';
import Row from '../containers/row';

class GameBoard extends Component {
  componentDidMount() {
    // play minimax turn on initialMount if it's his turn
    // see actions.js for an explanation on why playerTurn refers to the AI's turn
    if (this.props.isPlayerTurn) {
      this.props.onComponentMount(JSON.stringify(this.props.data));
    }
  }

  componentDidUpdate() {
    // detect win here
    // this.props.data.status
    // if status is win {if winner is x / is winner is o}
    if (this.props.data.status === "win") {
      this.props.data.winner === 'x' ? console.log("x is the winner") : console.log("o is the winner")
    }
    // if status is draw
    if (this.props.data.status === "draw") {
      console.log("this is a draw")
      // dispatch action
      // GAME_OVER
      // switch isPlayerTurn to null to avoid clicking on stuff
    }
    // play minimax turn when component updates (user has played a turn)
    if (this.props.isPlayerTurn) {
      this.props.onComponentMount(JSON.stringify(this.props.data));
    }
  }

  render() {
    // board is an array of 9 values
    // values 0 1 2 are the first row
    // values 3 4 5 are the second row
    // values 6 7 8 are the third row
    return (
      <div className="board">
        <Row row={this.props.data.board.slice(0, 3)} startingKey={0} />
        <Row row={this.props.data.board.slice(3, 6)} startingKey={3} />
        <Row row={this.props.data.board.slice(6)} startingKey={6} />
      </div>
    );
  }
}

export default GameBoard;