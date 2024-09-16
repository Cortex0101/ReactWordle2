// React-related imports
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Internal styles
import './Board.css';

const Board = ({wordLength, maxGuesses}) => {
    return (
       <Container className="board">
		{
			[...Array(maxGuesses)].map((_, i) => (
				<Row key={i}>
					{
						[...Array(wordLength)].map((_, j) => (
							<Col key={j} className="board-cell">
							</Col>
						))
					}
				</Row>
			))
		}
       </Container>
    );
};

export default Board;