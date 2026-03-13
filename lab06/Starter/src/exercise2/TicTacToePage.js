import {useState} from 'react';

function TicTacToePage() {
  return (
    <>
      <section className="panel">
        <h1>Tic-Tac-Toe</h1>
      </section>

      <section className="panel">
        <div className="ttt-board">
          {/* Build Square, Board, and calculateWinner in this file. */}
          <Board />
        </div>
      </section>
    </>
  );
}

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} onSquareClick={handleClick}/>
      </div>
    </>
  );
}

export default TicTacToePage;