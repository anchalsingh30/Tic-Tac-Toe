import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "./components/Row";
import "./App.css";

var symbolsMap = {
  2: ["checkTheMove"],
  0: ["checkTheMove checkTheMoveFor 'X'", 'X'],
  1: ["checkTheMove checkTheMoveFor 'O'", 'O']
};

var possiblePatternForGame = [
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonal
  [0, 4, 8],
  [2, 4, 6]
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: new Array(9).fill(2),
      turn: 0,
      player: true
    };
    this.checkNextMove = this.checkNextMove.bind(this);
    this.doResetBoard = this.doResetBoard.bind(this);
    this.gameBoard = this.gameBoard.bind(this);
  }

  gameBoard() {
    var result = false;
    possiblePatternForGame.forEach(eachPatternInGame => {
      var firstMove = this.state.boardState[eachPatternInGame[0]];

      if (firstMove !== 2) {
        var moves = this.state.boardState.filter((move, position) => {
          return eachPatternInGame.includes(position) && move === firstMove;
        });

        if (moves.length === 3) {
          document.querySelector("#message1").innerHTML =
            symbolsMap[moves[0]][1] + " Congratulations! You win!";
          document.querySelector("#message1").style.display = "block";
          eachPatternInGame.forEach(position => {
            var id = position + "-" + firstMove;
            document.getElementById(id).parentNode.style.background = "#006666";
          });
          this.setState({ player: false });
          result = true;
        }
      }
    });

    if (!this.state.boardState.includes(2) && !result) {
      document.querySelector("#message2").innerHTML = "It's a tie between both of you!";
      document.querySelector("#message2").style.display = "block";
      this.setState({ player: false });
    } 
  }

  doResetBoard(e) {
    if (e) e.preventDefault();
    document
      .querySelectorAll(".alert")
      .forEach(el => (el.style.display = "none"));
    this.setState({
      boardState: new Array(9).fill(2),
      turn: 0,
      player: true
    });
  }

  checkNextMove(id) {
    this.setState(
      prevState => {
        return {
          boardState: prevState.boardState
            .slice(0, id)
            .concat(prevState.turn)
            .concat(prevState.boardState.slice(id + 1)),
          turn: (prevState.turn + 1) % 2
        };
      },
      () => {
        this.gameBoard();
      }
    );
  }

  render() {
    const rows = [];
    const gridLength = 3;
    var counter = 0;
    while(counter<gridLength){
      rows.push(
        <Row
          row={counter}
          boardState={this.state.boardState}
          onNewMove={this.checkNextMove}
          player={this.state.player}
        />
      );
      counter++;
    }
      
    return (
      <div>
        <div class="container" id="container">
          <h3>Let's Play Tic-Tac-Toe</h3>
          <p>
            <a href= "#" onClick = {this.doResetBoard}>
             To play again click here!
            </a>
          </p>
          <p>{symbolsMap[this.state.turn][1]}'s turn</p>
          <div className="board">{rows}</div>
          <p class="alert alert-success" role="alert" id="message1"></p>
          <p class="alert alert-info" role="alert" id="message2"></p>
        </div>
      </div>
    );
  }
}

export default App;