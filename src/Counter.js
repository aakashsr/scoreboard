import React from "react";

const Counter = () => {
  return (
    <div className="counter">
      <button class="counter-action decrement">-</button>
      <span class="counter-score">25</span>
      <button class="counter-action increment">+</button>
    </div>
  );
};

export default Counter;
