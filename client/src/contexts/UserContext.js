// React-related imports
import React, { useState, useEffect, createContext } from 'react';

// Third-party libraries or packages
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Check for a logged-in user in localStorage on app load
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);

    // Handle successful login
    const handleLoginSuccess = (response) => {
        const decoded = jwtDecode(response.credential);
        setUser(decoded); // Save user info to state
        localStorage.setItem('user', JSON.stringify(decoded)); // Save user info in localStorage
        setIsAuthenticated(true);
    };

    // Handle logout
    const handleLogout = () => {
        googleLogout(); // Remove session from Google
        setUser(null); // Clear user state
        localStorage.removeItem('user'); // Remove user info from localStorage
        setIsAuthenticated(false);
    };

    return (
        <UserContext.Provider value={{
            isAuthenticated,
            user,
            handleLoginSuccess,
            handleLogout
        }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };