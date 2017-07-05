import React from 'react';

const GameBoard = ({ board }) => {
  // create component from board that was received

  // board is an array of 9 values
  // values 0 1 2 are the first row
  // values 3 4 5 are the second row
  // values 6 7 8 are the third row

  // row is an array of 3 objects
  // map extracts the id and the value from each object
  // and creates a cell out of each
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

  return (
    <div className="board">
      <Row row={board.slice(0, 3)} />
      <Row row={board.slice(3, 6)} />
      <Row row={board.slice(6)} />
    </div>
  );
}

export default GameBoard;