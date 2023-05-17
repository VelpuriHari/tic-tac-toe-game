const StatusMsg = ({ winner, isXNext, square }) => {
  const noMovesLeft = square.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMsg = () => {
    if (winner) {
      return (
        <div>
          Winner is{' '}
          <span className={winner == 'X' ? 'text-green' : 'text-orange'}>
            {winner}{' '}
          </span>
        </div>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <div>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> tied
        </div>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <div>
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {' '}
            {nextPlayer}
          </span>{' '}
        </div>
      );
    }
    return null;
  };

  return <div>{renderStatusMsg()}</div>;
};
export default StatusMsg;
