import React from 'react';
import './Board.css';
import Box from '../Box/Box';
import { useGameContext } from '../../context/GameContext';

export default function Board() {
  const { board } = useGameContext();
  // const refresh = () => {
  //   (board[0].content === '');
  // };

  return (
    <>
      <div className='board'>
        {board.map((box) => (
          <Box
            key={box.space} box={box}
          />
        ))
        }
      </div>
    </>
  );
}