// React-related imports
import React, { useState, createContext } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Å'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Æ', 'Ø'],
        ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']
    ];

    const [guesses, setGuesses] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ]);

    const [currentRow, setCurrentRow] = useState(0); // Current row (0-5) being inputted on
    const [currentCol, setCurrentCol] = useState(0); // Current column (0-4) being inputted on

    const handleCellClick = (rowIndex, colIndex) => {
        if (rowIndex === currentRow) {
            setCurrentCol(colIndex);
            return true;
        } else {
            return false;
        }
    }

    const addCharacter = (letter) => {
        /* If the currentRow and currentCol are within bounds, update the current guess at the current index. */
        if (currentRow < 6 && currentCol < 5) {
            const newGuess = guesses[currentRow].slice();
            newGuess[currentCol] = letter;
            const newGuesses = guesses.slice();
            newGuesses[currentRow] = newGuess;
            setGuesses(newGuesses);

            // Move to the next column if not at the end of the row otherwise stay at the end of the row
            if (currentCol < 4) {
                setCurrentCol(currentCol + 1);
            }
        }
    }


    // Delete a letter in the current guess
    const deleteCharacter = () => {
        /* If the current guess at the current col index is not empty, delete it 
        and decrement the current col index if not at the start of the row otherwise stay at the start of the row */
        if (currentRow < 6 && currentCol < 5) {
            const deletedLetter = guesses[currentRow][currentCol];

            const newGuess = guesses[currentRow].slice();
            newGuess[currentCol] = '';
            const newGuesses = guesses.slice();
            newGuesses[currentRow] = newGuess;
            setGuesses(newGuesses);

            if (currentCol > 0 && deletedLetter === '') {
                setCurrentCol(currentCol - 1);
            }
        }
    };

    const submitGuess = () => {
        // Move to the next row if not at the last row otherwise stay at the last row
        if (currentRow < 5) {
            setCurrentRow(currentRow + 1);
            setCurrentCol(0);

            // TODO: Submit guess to server
        }
    };

    // Handle user typing input (only update current row)
    const handleInput = (letter) => {
        if (letter === 'Backspace') {
            deleteCharacter();
            return true;
        } else if (letter === 'Enter') {
            submitGuess();
            return true;
        } else {
            addCharacter(letter);
        }
    };

    return (
        <GameContext.Provider value={{
            keyboardLayout,
            guesses,
            currentRow,
            currentCol,
            handleCellClick,
            handleInput
        }}>
            {children}
        </GameContext.Provider>
    );
}

export { GameContext, GameProvider };