import React, { createContext } from 'react';
import useUser from '../hooks/useUser';
import useSettings from '../hooks/useSettings';
import { defaultStatistics } from '../models/User';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const { userState, handleLoginSuccess, handleLogout } = useUser();
    const {
        settings,
        toggleTheme,
        changeLanguage,
        toggleColorBlind,
        toggleSwappedButtons,
        toggleDisableAnimations,
        SUPPORTED_LANGUAGES,
        ANIMATION_DURATION,
    } = useSettings();

    return (
        <UserContext.Provider value={{
            ...userState,
            handleLoginSuccess,
            handleLogout,
            ...settings,
            toggleTheme,
            changeLanguage,
            toggleColorBlind,
            toggleSwappedButtons,
            toggleDisableAnimations,
            SUPPORTED_LANGUAGES,
            ANIMATION_DURATION,
            generalStatistics: defaultStatistics,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };