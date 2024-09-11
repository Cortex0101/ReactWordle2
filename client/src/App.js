import logo from './logo.svg';
import './App.css';

import { GameContext, GameProvider } from './contexts/GameContext';

import Board from './components/Board';
import Keyboardd from './components/Keyboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <GameProvider>
        <Board wordLength={5} maxGuesses={6} />
        <Keyboardd />
      </GameProvider>
    </div>
  );
}

export default App;
