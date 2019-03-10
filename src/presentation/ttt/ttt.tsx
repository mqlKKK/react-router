import * as React from "react";
import './ttt.scss';
import { Button } from 'antd'
import { Link } from 'react-router-dom';

export interface SquareProps {
  onClick: any;
  value: any;
}
export interface BoardProps {
  squares: string[];
  onClick: any;
}
export interface GameProps {
}
export interface GameState {
  history: any;
  stepNumber: any;
  xIsNext: any;
}

function Square({ onClick, value }: SquareProps) {
  return (
    <button
      className="square"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export class Board extends React.Component<BoardProps, object> {
  public renderSquare(i: any) {
    return <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />;
  }

  public render() {
    return (
      <div>
        <div id = "board">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        </div>
      </div>
    );
  }
}

export class Game extends React.Component<GameProps, GameState> {
  constructor(GameProps: any) {
    super(GameProps);
    this.state = {
      history: [{
        squares: Array(9),
      }],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(current.squares) || current.squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  public render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step: any, move: any) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move}>
          <a href="/tictactoe#/tictactoe" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div id = "game">
        <p id = "game-name">TicTacToe</p>
        <div className="game-board">
          <Board
            //squares={history[this.state.stepNumber]}
            squares={current.squares}
            //squares={['A', 'B', 'C', 'D', 'Q', 'W', 'E', 'R', 'T']}
            onClick={(i: any) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        <Button id = 'B1'><Link to="/">返回</Link></Button>
      </div>
    );
  }
}

function calculateWinner(squares: any) {
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
