import React, { useState } from 'react';

const History = ({ history, moveTo, currentMove }) => (
  <ul>
    {history.map((_, move) => (
      <li key={move}>
        <button
          type="button"
          onClick={() => moveTo(move)}
          style={{ fontWeight: move === currentMove ? 'bold' : 'normal' }}
        >
          {move === 0 ? 'Go to game start' : `Go to move #${move}`}
        </button>
      </li>
    ))}
  </ul>
);

export default History;
