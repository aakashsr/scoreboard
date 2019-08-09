import React from "react";

const Counter = props => {
//   const score = props.score;
  return (
    <div className="counter">
      <button class="counter-action decrement">-</button>
      <span class="counter-score">{props.score}</span>
      <button class="counter-action increment">+</button>
    </div>
  );
};

export default Counter;
