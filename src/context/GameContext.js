const { createContext } = require("react");

const GameContext = createContext();
const GameProvider = ({ children }) => {
  
  return (
    <GameContext.Provider value={{}}>
      {children}
    </GameContext.Provider>
  );
};