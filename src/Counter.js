import React from "react";

const Counter = props => {
  //   increaseScore = () => {
  //     this.setState(prevState => ({
  //       score: prevState.score + 1
  //     }));
  //   };

  //   decreaseScore = () => {
  //     this.setState((prevState) => ({
  //       score: prevState.score - 1
  //     }));
  //   };

  return (
    <div className="counter">
      <button
        //   onClick={this.decreaseScore}
        className="counter-action decrement"
      >
        -
      </button>
      <span className="counter-score">{props.score}</span>
      <button
        //   onClick={this.increaseScore}
        className="counter-action increment"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
