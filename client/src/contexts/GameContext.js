// React-related imports
import React, { useState, createContext } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [board, setBoard] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ]);

    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Å'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Æ', 'Ø'],
        ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']
    ];

    // Current row (0-5) being inputted on
    const [currentRow, setCurrentRow] = useState(0);

    // Curren cell (0-4) being inputted on
    const [currentCell, setCurrentCell] = useState(0);

    return (
        <GameContext.Provider value={{ 
            board,
            currentRow,
            currentCell,
            keyboardLayout,
         }}>
            {children}
        </GameContext.Provider>
    );
}

export { GameContext, GameProvider };