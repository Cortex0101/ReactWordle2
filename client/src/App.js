// 1. React-related imports
import React, { useContext } from 'react';

// 2. Third-party libraries or packages
import { GoogleOAuthProvider } from '@react-oauth/google'
import './i18n';

// 3. Internal context providers (like global app contexts)
import { GameProvider } from './contexts/GameContext';
import { MenuProvider } from './contexts/MenuContext';
import { UserProvider } from './contexts/UserContext';

// 4. Internal components (application-specific components)
import Header from './components/Header';
import Board from './components/Board';
import Keyboardd from './components/Keyboard';

// 5. Internal off-canvas components
import Stats from './Offcanvas/Stats';
import Settings from './Offcanvas/Settings';
import Help from './Offcanvas/Help';

// 6. Internal styles
import './App.css'; 
import './Theme.css';

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
