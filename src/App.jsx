import { useState } from 'react';

import Player from "./components/Player";
import Gammeboard from './components/Gameboard';
import Log from './components/Log';

function derivedActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
 // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((currentActive) => {
    //   return currentActive === 'X' ? 'O' : 'X';
    // });
  

    setGameTurns(prevTurns => {
      // let currentPlayer = 'X';
      // if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
      //   currentPlayer = 'O';
      // }
      const currentPlayer = derivedActivePlayer(prevTurns);
      
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <Gammeboard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
