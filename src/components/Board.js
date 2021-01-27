import React from 'react';
import Square from './Square';

const Board = () => (
  <div className="board">
    <div className="board-row">
      <Square value={1} />
      <Square value={1} />
      <Square value={1} />
    </div>
    <div className="board-row">
      <Square value={1} />
      <Square value={1} />
      <Square value={1} />
    </div>
    <div className="board-row">
      <Square value={1} />
      <Square value={1} />
      <Square value={1} />
    </div>
  </div>
);

export default Board;
