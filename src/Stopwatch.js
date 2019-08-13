import React, { Component } from "react";

export default class Stopwatch extends Component {
  state = {
    isRunning: false
  };

  changeValue = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
  };

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.changeValue}>{this.state.isRunning ?"STOP":"START"}</button>
        <button>Reset</button>
      </div>
    );
  }
}
