import React, { Component } from "react";
import Column from "./Column";

class Row extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    const cols = [];
    var i=0;
    while (i < 3) {
      var id = this.props.row * 3 + i;
      var assign = this.props.boardState[id];
      cols.push(
        <Column
          key={id + "-" + assign}
          id={id + "-" + assign}
          assign={assign}
          onNewMove={this.props.onNewMove}
          player={this.props.player}
        />
      );
      i++;
    }
    return <div className="row">{cols}</div>;
  }
}

export default Row;