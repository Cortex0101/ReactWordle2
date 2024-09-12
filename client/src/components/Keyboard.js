// React-related imports
import { useContext } from "react";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";

// Internal context providers (like global app contexts)
import { GameContext } from "../contexts/GameContext";

// Internal styles
import "./Keyboard.css";


const Keyboard = () => {
    const layout = useContext(GameContext).keyboardLayout;

    return (
        <div className="keyboard">
            {
                layout.map((row, i) => (
                    <div key={i} className="keyboard-row">
                        {
                            row.map((letter, j) => (
                                <button className={`keyboard-key ${letter.length > 1 ? 'special-key-size' : 'standard-key-size'}`} key={j} onClick={() => console.log(letter)}>
                                    {letter}
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