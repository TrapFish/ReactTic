import {useState} from 'react';

import Player from "./components/Player";
import Gammeboard from './components/Gameboard'
function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    setActivePlayer((currentActive)=>{
      return currentActive === 'X' ? 'O' : 'X';
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
           <Player initialName="Player 1" symbol= "X" isActive={activePlayer  === 'X'}/>
           <Player initialName="Player 2" symbol= "O" isActive={activePlayer  === 'O'}/>
        </ol>
        <Gammeboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>

    </main>
  )
}

export default App
