import React, { createContext } from 'react';
import useUser from '../hooks/useUser';
import useSettings from '../hooks/useSettings';
import { defaultStatistics } from '../models/User';

const UserContext = createContext();

/*
user
: 
aud
: 
"475599340724-o8ap2f5p8a8c4li1b48tip823enhlie1.apps.googleusercontent.com"
azp
: 
"475599340724-o8ap2f5p8a8c4li1b48tip823enhlie1.apps.googleusercontent.com"
email
: 
"a59132166@gmail.com"
email_verified
: 
true
exp
: 
1728136586
family_name
: 
"Eiruff"
given_name
: 
"Lucas"
iat
: 
1728132986
iss
: 
"https://accounts.google.com"
jti
: 
"f8e8481184414c085d26a8244f81a8cb7e57a983"
name
: 
"Lucas Eiruff"
nbf
: 
1728132686
picture
: 
"https://lh3.googleusercontent.com/a/ACg8ocI2kmPBsLxmg6HbgMAilpWk9Ieg-2KIxVNwlkz2MM55Xk526A=s96-c"
sub
: 
"110745008383163282457"
*/

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