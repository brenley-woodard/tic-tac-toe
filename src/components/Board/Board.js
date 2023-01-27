import React, { useContext } from 'react';
import './Board.css';
import Box from '../Box/Box';
import boardData from '../../board-data';
import { useGameContext } from '../../context/GameContext';

export default function Board() {
  const { board } = useGameContext();
  console.log('board', board);
  return (
    <div className='board'>
      {board.map((box) => (
        <Box
          key={box.space} box={box}
        />
      ))}
    </div>
  );
}
