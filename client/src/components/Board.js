// React-related imports
import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import contentx
import { GameContext } from "../contexts/GameContext";

// Internal styles
import './Board.css';

const BoardCell = ({ letter, rowIndex, colIndex, active }) => {
	const { handleCellClick } = useContext(GameContext);

	return (
		<Col className={`board-cell mx-1 my-1  ${active ? 'board-cell__selected' : ''}`} onClick={() => {
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
	);
};

export default Board;