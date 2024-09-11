import { Container, Row, Col, Form } from "react-bootstrap";

import './Board.css';

const Board = ({wordLength, maxGuesses}) => {
    return (
       <Container className="board">
		{
			[...Array(maxGuesses)].map((_, i) => (
				<Row key={i}>
					{
						[...Array(wordLength)].map((_, j) => (
							<Col key={j} className="border border-dark">
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