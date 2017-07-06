import React, { Component } from 'react';

class GameBoard extends Component {
  componentDidMount() {
    if (this.props.isPlayerTurn) {
      // convert data to JSON
      this.props.onComponentMount(JSON.stringify(this.props.data));
      // create reducer to take care of response
    }
  }

  render() {
    // row is an array of 3 objects
    // map extracts the id and the value from each object and creates a cell out of each
    const Row = ({ row }) => (
      <div className="row">
        {row.map(cell => (
          <div className="cell" id={cell.id} key={cell.id}>
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