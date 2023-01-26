import React from 'react';
import './Board.css';
import Box from '../Box/Box';
import boardData from '../../board-data';

export default function Board() {
  return (
    <div className='board'>
      {boardData.map((box) => (
        <Box
          key={box.space + box.content}
        />
      ))}
    </div>
  );
}
