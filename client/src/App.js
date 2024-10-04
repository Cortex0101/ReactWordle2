// 1. React-related imports
import React, { useContext, Suspense } from 'react';

// 2. Third-party libraries or packages
import { GoogleOAuthProvider } from '@react-oauth/google'
import './i18n';

// 3. Internal context providers (like global app contexts)
import { GameProvider } from './contexts/GameContext';
import { MenuProvider, MenuContext } from './contexts/MenuContext';
import { UserProvider } from './contexts/UserContext';

// 4. Internal components (application-specific components)
import Header from './components/Header';
import Board from './components/Board';
import Keyboardd from './components/Keyboard';

// 5. Internal styles
import './App.css'; 
import './Theme.css';

// 6. Internal off-canvas components (lazy-loaded)
const LazyStats = React.lazy(() => import('./Offcanvas/Stats')); // Lazy load Stats
const LazySettings = React.lazy(() => import('./Offcanvas/Settings'));
const LazyHelp = React.lazy(() => import('./Offcanvas/Help'));
const LazySideNavBar = React.lazy(() => import('./Offcanvas/SideNavBar'));
const LazyLogin = React.lazy(() => import('./Offcanvas/Login'));

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="475599340724-o8ap2f5p8a8c4li1b48tip823enhlie1.apps.googleusercontent.com">
        <UserProvider>
          <MenuProvider>
            <Header />
            <MenuContent />
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

const MenuContent = () => {
  const { statsOpen, settingsOpen, helpOpen, sideNavBarOpen, loginOpen } = React.useContext(MenuContext);

  return (
    <>
      {/* Use Suspense to lazy load the Stats, Settings, Help, and SideNavBar components */}
      {statsOpen && (
        <Suspense fallback={null}>
          <LazyStats />
        </Suspense>
      )}

      {settingsOpen && (
        <Suspense fallback={null}>
          <LazySettings />
        </Suspense>
      )}

      {helpOpen && (
        <Suspense fallback={null}>
          <LazyHelp />
        </Suspense>
      )}

      {sideNavBarOpen && (
        <Suspense fallback={null}>
          <LazySideNavBar />
        </Suspense>
      )}

      {/* Login */}
      {loginOpen && (
        <Suspense fallback={null}>
          <LazyLogin />
        </Suspense>
      )}
    </>
  );
};

export default App;
