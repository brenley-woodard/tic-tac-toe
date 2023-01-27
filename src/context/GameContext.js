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
      if (box.space === space) box.content = currentPlayer;
      return box;
    });
    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
    setBoard(newBoard);
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