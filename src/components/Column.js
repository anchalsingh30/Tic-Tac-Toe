import React, { Component } from "react";

var symbolsColumnMap = {
  2: ["assign"],
  0: ["assign assign-x", 'X'],
  1: ["assign assign-o", 'O']
};

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.checkNextMove = this.checkNextMove.bind(this);
  }
  
  checkNextMove(e) {
    if (!this.props.player) {
      document.querySelector("#message1").style.display = "none";
      document.querySelector("#message2").innerHTML ="Game is over! Click play again to play.";
      document.querySelector("#message2").style.display = "block";
      return false;
    } else if (this.props.assign === 2)
      this.props.onNewMove(parseInt(e.target.id));
  }

  render() {
    return (
      <div className="col" onClick={this.checkNextMove}>
        <div class={symbolsColumnMap[this.props.assign][0]} id={this.props.id}>
          {symbolsColumnMap[this.props.assign][1]}
        </div>
      </div>
    );
  }
}

export default Column;