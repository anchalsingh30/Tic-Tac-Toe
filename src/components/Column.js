import React, { Component } from "react";

var symbolsMap = {
  2: ["marking", "32"],
  0: ["marking marking-x", 9587],
  1: ["marking marking-o", 9711]
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
    } else if (this.props.marking === 2)
      this.props.onNewMove(parseInt(e.target.id));
  }

  render() {
    return (
      <div className="col" onClick={this.checkNextMove}>
        <div class={symbolsMap[this.props.marking][0]} id={this.props.id}>
          {String.fromCharCode(symbolsMap[this.props.marking][1])}
        </div>
      </div>
    );
  }
}

export default Column;