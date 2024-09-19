// React-related imports
import React, { useState, createContext } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [statsOpen, setStatsOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const [sideNavBarOpen, setSideNavBarOpen] = useState(false);

    const toggleStatsOpen = () => {
        setStatsOpen(!statsOpen);
    }

    const toggleSettingsOpen = () => {
        setSettingsOpen(!settingsOpen);
    }

    const toggleHelpOpen = () => {
        setHelpOpen(!helpOpen);
    }

    const toggleSideNavBarOpen = () => {
        setSideNavBarOpen(!sideNavBarOpen);
    }

    return (
        <MenuContext.Provider value={{ 
            statsOpen,
            toggleStatsOpen,
            settingsOpen, 
            toggleSettingsOpen,
            helpOpen,
            toggleHelpOpen,
            sideNavBarOpen,
            toggleSideNavBarOpen
         }}>
            {children}
        </MenuContext.Provider>
    );
}

export { MenuContext, MenuProvider };