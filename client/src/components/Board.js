// React-related imports
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import contentx
import { GameContext } from "../contexts/GameContext";

// Internal styles
import './Board.css';

const BoardCell = ({ letter, rowIndex, colIndex, active }) => {
	const { handleCellClick } = useContext(GameContext);

	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		if (letter !== '') {
			setIsAnimating(true);
			const timer = setTimeout(() => setIsAnimating(false), 300); // Animation duration

			return () => clearTimeout(timer); // Clean up the timeout if component unmounts
		}
	}, [letter]); // Trigger the effect when the letter changes


	return (
		<Col className={`board-cell mx-1 my-1  ${active ? 'board-cell__selected' : ''} ${isAnimating ? 'letter-added' : ''}`} onClick={() => {
			handleCellClick(rowIndex, colIndex);
		}}>
			<div className={`board-cell__content`}>
				{letter}
			</div>
		</Col>
	);
}

const Board = ({ wordLength, maxGuesses }) => {
	const { guesses, currentRow, currentCol } = useContext(GameContext);

	return (
		<div className="board-container">
			<Container className="board">
				{guesses.map((guess, rowIndex) => (
					<Row key={rowIndex}>
						{guess.map((letter, colIndex) => (
							<BoardCell
								key={colIndex}
								letter={letter}
								rowIndex={rowIndex}
								colIndex={colIndex}
								active={rowIndex === currentRow && colIndex === currentCol}
							/>
						))}
					</Row>
				))}
			</Container>
		</div>
	);
};

export default Board;