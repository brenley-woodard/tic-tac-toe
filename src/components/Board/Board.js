import React from 'react';
import Box from '../Box/Box';
import boardData from '../../board-data';

export default function Board() {
  return (
    <div>
      {boardData.map((box) => (
        <Box
          key={box.space + box.content}
        />
      ))}
    </div>
  );
}
