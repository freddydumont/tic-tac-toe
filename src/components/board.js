import React, { Component } from 'react';
import Row from '../components/row';

class Board extends Component {
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

  createRows() {
    let rows = [];
    for (let i = 0; i < 7; i += 3) {
      rows.push(
        <Row row={this.props.data.board.slice(i, i + 3)} key={i} startingKey={i}
          isPlayerTurn={this.props.isPlayerTurn} onCellClick={this.props.onCellClick}
          opponentPiece={this.props.data.opponent_piece} />
      );
    }
    return rows;
  }

  render() {
    // board is an array of 9 values
    // values 0 1 2 are the first row
    // values 3 4 5 are the second row
    // values 6 7 8 are the third row
    return (
      <div className="board">
        {this.createRows()}
      </div>
    );
  }
}

export default Board;