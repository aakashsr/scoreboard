import React from "react";


const Counter = ({changeScore,score,index}) => {

console.log(changeScore);
        return (
          <div className="counter">
            <button
              onClick={() => changeScore(index,-1)}
              className="counter-action decrement"
            >
              -
            </button>
            <span className="counter-score">{score}</span>
            <button
              onClick={() => changeScore(index,1)}
              className="counter-action increment"
            >
              +
            </button>
          </div>
        );
      };;

export default Counter;
