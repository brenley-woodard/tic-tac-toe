import { createContext, useContext, useState } from 'react';
import boardData from '../board-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(boardData);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('');

  const handleClick = (space) => {
    const newBoard = board.map((box) => {
      if ((box.space === space) && (box.content === '') && (active === true)) {box.content = currentPlayer;
        currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
      }
      return box;
    });
    setBoard(newBoard);
    checkWin(newBoard);
  };
 
  const checkWin = () => {
    if ((board[0].content === board[1].content && board[2].content))console.log('WINNER');
    if ((board[3].content === board[4].content && board[5].content))console.log('WINNER');
    if ((board[6].content === board[7].content && board[8].content))console.log('WINNER');
    if ((board[0].content === board[3].content && board[6].content))console.log('WINNER');
    if ((board[1].content === board[4].content && board[7].content))console.log('WINNER');
    if ((board[2].content === board[5].content && board[8].content))console.log('WINNER');
    if ((board[0].content === board[4].content && board[8].content))console.log('WINNER');
    if ((board[2].content === board[4].content && board[6].content))console.log('WINNER');
  };

  return (
    <GameContext.Provider value={{ board, setBoard, currentPlayer, setCurrentPlayer, active, setActive, gameMessage, setGameMessage, handleClick }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export { useGameContext, GameProvider };