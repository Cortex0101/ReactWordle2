import { useState, createContext } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [statsOpen, setStatsOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);

    const toggleStatsOpen = () => {
        setStatsOpen(!statsOpen);
    }

    const toggleSettingsOpen = () => {
        setSettingsOpen(!settingsOpen);
    }

    const toggleHelpOpen = () => {
        setHelpOpen(!helpOpen);
    }

    return (
        <MenuContext.Provider value={{ 
            statsOpen,
            toggleStatsOpen,
            settingsOpen, 
            toggleSettingsOpen,
            helpOpen,
            toggleHelpOpen
         }}>
            {children}
        </MenuContext.Provider>
    );
}

export { MenuContext, MenuProvider };