import React from "react";
import Counter from "./Counter";

const Player = ({changeScore,score,name,removePlayer,index,id}) => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          onClick={() => removePlayer(id)}
          className="remove-player"
        >
          ✖
        </button>
        {name}
      </span>
      <Counter
        score={score}
        index={index}
        changeScore={changeScore}
        // increment={increment}
        // decrement={decrement}
      />
    </div>
  );
};

export default Player;
