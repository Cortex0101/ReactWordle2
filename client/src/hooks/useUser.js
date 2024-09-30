import { useState, useEffect } from 'react';
import { googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '../utils/localStorage';
import { defaultUser } from '../models/User';

const useUser = () => {
    const [userState, setUserState] = useState(defaultUser);

    useEffect(() => {
        const storedUser = getLocalStorageItem('user', defaultUser);
        setUserState(storedUser);
    }, []);

    const handleLoginSuccess = (response) => {
        const decoded = jwtDecode(response.credential);
        const updatedUser = { ...userState, isAuthenticated: true, user: decoded };
        setUserState(updatedUser);
        setLocalStorageItem('user', updatedUser);
    };

    const handleLogout = () => {
        googleLogout();
        setUserState(defaultUser);
        removeLocalStorageItem('user');
    };

    return {
        userState,
        handleLoginSuccess,
        handleLogout,
    };
};

export default useUser;