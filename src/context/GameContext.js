import { createContext, useContext, useState } from 'react';
const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([
    { space: 0, content: '' },
    { space: 1, content: '' },
    { space: 2, content: '' },
    { space: 3, content: '' },
    { space: 4, content: '' },
    { space: 5, content: '' },
    { space: 6, content: '' },
    { space: 7, content: '' },
    { space: 8, content: '' },
  ]);
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
    checkWin();
  };
 
  const checkWin = () => {
    if ((board[0].content === board[1].content) & (board[0].content !== '') & (board[0].content === board[2].content))
      setActive(false);
    // console.log('Winner!');
    if ((board[3].content === board[4].content) & (board[3].content !== '') & (board[3].content === board[5].content))
      setActive(false);
    // console.log('Winner!');
    
    if ((board[6].content === board[7].content) & (board[6].content !== '') & (board[6].content === board[8].content))
      setActive(false);
    // console.log('Winner!');
    
    if ((board[0].content === board[3].content) & (board[0].content !== '') & (board[0].content === board[6].content))
      setActive(false);
    // console.log('Winner!');
    
    if ((board[1].content === board[4].content) & (board[1].content !== '') & (board[1].content === board[7].content))
      setActive(false);
    // console.log('Winner!');
    
    if ((board[2].content === board[5].content) & (board[2].content !== '') & (board[2].content === board[8].content))
      setActive(false);
    // console.log('Winner!');
    
    if ((board[0].content === board[4].content) & (board[0].content !== '') & (board[0].content === board[8].content))
      setActive(false);
    // console.log('Winner!');
  
    if ((board[2].content === board[4].content) & (board[2].content !== '') & (board[2].content === board[6].content))
      setActive(false);
    // console.log('Winner!');
  };

  return (
    <GameContext.Provider value={{ board, setBoard, currentPlayer, setCurrentPlayer, active, setActive, gameMessage, setGameMessage, handleClick, checkWin }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export { useGameContext, GameProvider };