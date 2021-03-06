import React from 'react';

// row is an array of 3 objects
// map extracts the id and the value from each object and creates a cell out of each
let Row = ({ row, startingKey, onCellClick, isPlayerTurn, opponentPiece }) => (
  <div className="row">
    {row.map((cell, i) => (
      <div
        className="cell"
        style={cell.value === opponentPiece ? { color: '#98c378' } : { color: '#e06c75' }}
        id={cell.id}
        key={startingKey + i}
        onClick={() => {
          // an action is dispatched only when it's the user's turn and cell is empty
          if (isPlayerTurn === false && cell.value === '') {
            // sending index of board array to reducer
            onCellClick(startingKey + i);
          }
        }}>
        {cell.value === 'x' ? String.fromCharCode(215) :
          cell.value === 'o' ? String.fromCharCode(9675) : cell.value}
      </div>
    ))}
  </div>
);
export default Row;