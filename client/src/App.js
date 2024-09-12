import logo from './logo.svg';
import './App.css';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { GameProvider } from './contexts/GameContext';
import { MenuProvider } from './contexts/MenuContext';
import { UserProvider } from './contexts/UserContext';

import Header from './components/Header';
import Board from './components/Board';
import Keyboardd from './components/Keyboard';

import Stats from './Offcanvas/Stats';
import Settings from './Offcanvas/Settings';
import Help from './Offcanvas/Help';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="475599340724-o8ap2f5p8a8c4li1b48tip823enhlie1.apps.googleusercontent.com">
        <UserProvider>
          <MenuProvider>
            <Header />
            <Stats />
            <Settings />
            <Help />
          </MenuProvider>
          <GameProvider>
            <Board wordLength={5} maxGuesses={6} />
            <Keyboardd />
          </GameProvider>          
        </UserProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
