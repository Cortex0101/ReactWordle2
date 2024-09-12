// React-related imports
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
							<Col key={j} className="border border-light">
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