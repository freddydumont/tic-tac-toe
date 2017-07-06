import React, { Component } from 'react';

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

    // play minimax turn when component updates (user has played a turn)
    if (this.props.isPlayerTurn) {
      this.props.onComponentMount(JSON.stringify(this.props.data));
    }
  }

  render() {
    // row is an array of 3 objects
    // map extracts the id and the value from each object and creates a cell out of each
    const Row = ({ row }) => (
      <div className="row">
        {row.map(cell => (
          <div
            className="cell"
            id={cell.id}
            key={cell.id}
            onClick={() => {
              // an action is dispatched only when it's the user's turn
              // and cell.value is empty
              if (!this.props.isPlayerTurn && cell.value === '') {
                cell.value = this.props.data.opponent_piece;
                this.props.onCellClick(this.props.data.board);
              }
            }}>
            {cell.value === 'x' ? String.fromCharCode(215) :
              cell.value === 'o' ? String.fromCharCode(9675) : cell.value}
          </div>
        ))}
      </div>
    );
    // board is an array of 9 values
    // values 0 1 2 are the first row
    // values 3 4 5 are the second row
    // values 6 7 8 are the third row
    return (
      <div className="board">
        <Row row={this.props.data.board.slice(0, 3)} />
        <Row row={this.props.data.board.slice(3, 6)} />
        <Row row={this.props.data.board.slice(6)} />
      </div>
    );
  }
}

export default GameBoard;