import React, { Component } from 'react';
import Row from '../components/row';

class GameBoard extends Component {
  componentDidMount() {
    // play minimax turn on initialMount if it's his turn
    // see actions.js for an explanation on why playerTurn refers to the AI's turn
    if (this.props.isPlayerTurn) {
      this.props.onComponentMount(JSON.stringify(this.props.data));
    }
  }

  componentDidUpdate() {
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
        <Row row={this.props.data.board.slice(0, 3)} startingKey={0}
          isPlayerTurn={this.props.isPlayerTurn} onCellClick={this.props.onCellClick} />
        <Row row={this.props.data.board.slice(3, 6)} startingKey={3}
          isPlayerTurn={this.props.isPlayerTurn} onCellClick={this.props.onCellClick} />
        <Row row={this.props.data.board.slice(6)} startingKey={6}
          isPlayerTurn={this.props.isPlayerTurn} onCellClick={this.props.onCellClick} />
      </div>
    );
  }
}

export default GameBoard;