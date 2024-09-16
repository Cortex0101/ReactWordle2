// React-related imports
import React, { useState, useEffect, createContext } from 'react';

// Third-party libraries or packages
import { googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import i18n from '../i18n'; // Import i18n to change language


const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    
    // Add theme and language settings
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('dk');
    const [colorBlind, setColorBlind] = useState(false);
    const [swappedButtons, setSwappedButtons] = useState(false);

    // Check for a logged-in user and settings in localStorage on app load
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedSettings = localStorage.getItem('settings');

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsAuthenticated(true);
        }

        if (storedSettings) {
            const parsedSettings = JSON.parse(storedSettings);
            setTheme(parsedSettings.theme || 'dark');
            setLanguage(parsedSettings.language || 'dk');
            setColorBlind(parsedSettings.colorBlind || false);
            setSwappedButtons(parsedSettings.swappedButtons || false);
        }

        // Set the theme on the document element
        document.documentElement.setAttribute('data-bs-theme', theme);
        document.documentElement.setAttribute('color-blind', colorBlind);
    }, [theme, colorBlind]);

    // Handle successful login and save user & settings
    const handleLoginSuccess = (response) => {
        const decoded = jwtDecode(response.credential);
        setUser(decoded);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(decoded)); // Save user info in localStorage

        // Save the current settings in localStorage as well
        localStorage.setItem('settings', JSON.stringify({ theme, language, colorBlind, swappedButtons }));
    };

    // Handle logout
    const handleLogout = () => {
        googleLogout();
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user'); // Clear user info from localStorage
        localStorage.removeItem('settings'); // Remove settings as well
    };

    // Theme toggle function
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-bs-theme', newTheme);

        // Save the updated theme in localStorage
        localStorage.setItem('settings', JSON.stringify({ theme: newTheme, language, colorBlind, swappedButtons }));
    };

    // Language change function
    const changeLanguage = (lng) => {
        setLanguage(lng);
        i18n.changeLanguage(lng);  // This updates the language for i18next
        localStorage.setItem('settings', JSON.stringify({ theme, language: lng, colorBlind, swappedButtons }));
    };

    // Toggle color-blind mode
    const toggleColorBlind = () => {
        const newColorBlind = !colorBlind;
        setColorBlind(newColorBlind);
        document.documentElement.setAttribute('color-blind', newColorBlind);

        // Save the updated color-blind mode in localStorage
        localStorage.setItem('settings', JSON.stringify({ theme, language, colorBlind: newColorBlind, swappedButtons }));
    };

    // Toggle swapped buttons
    const toggleSwappedButtons = () => {
        const newSwappedButtons = !swappedButtons;
        setSwappedButtons(newSwappedButtons);
        document.documentElement.setAttribute('swapped-buttons', newSwappedButtons);

        // Save the updated swapped buttons in localStorage
        localStorage.setItem('settings', JSON.stringify({ theme, language, colorBlind, swappedButtons: newSwappedButtons }));
    }

    return (
        <UserContext.Provider value={{
            isAuthenticated,
            user,
            handleLoginSuccess,
            handleLogout,
            theme,
            toggleTheme,
            language,
            changeLanguage,
            colorBlind,
            toggleColorBlind,
            swappedButtons,
            toggleSwappedButtons
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };