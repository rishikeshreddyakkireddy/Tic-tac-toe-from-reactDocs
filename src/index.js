import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { useState } from 'react';

const Square  = (props)=>{
    // const [player,setPlayer] = useState(null);
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

const Board = ()=>{
    const [squares,setSquares] = useState(Array(9).fill(null));
    let [xIsNext,setXIsNext] = useState(true);
    const handleClick = (i)=>{
      const dupSquares = squares.slice();
      if(squares[i] || calculateWinner(squares)){
        return;
      }
      dupSquares[i] = xIsNext ? 'X': 'O';
      setXIsNext(!xIsNext);
      setSquares(dupSquares);
    }
    const winner = calculateWinner(squares);
    console.log(winner);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onClick={() => handleClick(0)}/>
          <Square value={squares[1]} onClick={() => handleClick(1)}/>
          <Square value={squares[2]} onClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClick={() => handleClick(3)}/>
          <Square value={squares[4]} onClick={() => handleClick(4)}/>
          <Square value={squares[5]} onClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={squares[6]} onClick={() => handleClick(6)}/>
          <Square value={squares[7]} onClick={() => handleClick(7)}/>
          <Square value={squares[8]} onClick={() => handleClick(8)}/>
        </div>
      </div>
    );
}



const Game  = ()=>{
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
}

// ========================================

ReactDOM.render(<div>
  <Game />
  </div>,
  document.getElementById('root')
);


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}