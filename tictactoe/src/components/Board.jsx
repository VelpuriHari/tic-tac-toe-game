import { useState } from 'react';
import Square from './square';
import { calculateWinner } from '../winner';

const Board = () => {
  const [square, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(square);
  const player = isXNext ? 'X' : 'O';
  const statusPlayer = winner
    ? `Winner is ${winner}`
    : `Next Player is ${player}`;
  console.log(winner, 'winner');
  const handleSquareClick = clickedPosition => {
    if (square[clickedPosition] || winner) {
      return;
    }
    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };
  const renderSquare = position => {
    return (
      <Square
        value={square[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <h2>{statusPlayer}</h2>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
