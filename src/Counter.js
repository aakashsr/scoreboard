import React from "react";
import PropTypes from 'prop-types';

const Counter = ({ changeScore, score, index , handleScoreChangeAndHighestScore}) => {
  return (
    <div className="counter">
      <button
        onClick={() => handleScoreChangeAndHighestScore(index, -1)}
        className="counter-action decrement"
      >
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        onClick={() => handleScoreChangeAndHighestScore(index, +1)}
        className="counter-action increment"
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore:  PropTypes.func 
};

export default Counter;
