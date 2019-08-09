import React, { Component } from "react";

class Counter extends Component {
  state = {
    score: 0
  };

  increaseScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };

  decreaseScore = () => {
    this.setState((prevState) => ({
      score: prevState.score - 1
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          onClick={this.decreaseScore}
          className="counter-action decrement"
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          onClick={this.increaseScore}
          className="counter-action increment"
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
