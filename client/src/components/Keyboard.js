// React-related imports
import React, { useContext } from "react";

// Internal context providers (like global app contexts)
import { GameContext } from "../contexts/GameContext";

// Internal styles
import "./Keyboard.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

const Keyboard = () => {
    const { keyboardLayout, handleInput } = useContext(GameContext);

    const renderBackspace = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-backspace" viewBox="0 0 16 16" fillRule="evenodd">
                <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
            </svg>
        )
    }

    const renderEnter = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16" fillRule="evenodd">
                <path d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z" />
                <path d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
            </svg>
        )
    }

    return (
        <div className="keyboard">
            {
                keyboardLayout.map((row, i) => (
                    <div key={i} className="keyboard-row">
                        {
                            row.map((letter, j) => (
                                <button className={`keyboard-key ${letter.length > 1 ? (letter.toLowerCase() === 'backspace' ? 'backspace' : 'enter') : ''}`}
                                    key={j}
                                    onClick={() => {
                                        handleInput(letter);
                                    }}>
                                    {letter.toLowerCase() === 'backspace' ? renderBackspace() : letter.toLowerCase() === 'enter' ? renderEnter() : letter}
                                </button>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Keyboard;