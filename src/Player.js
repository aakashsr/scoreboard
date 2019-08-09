import React from "react";
import Counter from "./Counter";

const Player = props => {
  return (
    <div className="player">
      <span className="player-name">
        <button onClick={() => props.removePlayer(props.id)} className="remove-player">✖</button>
        {props.name}
      </span>
      <Counter score={props.score} />
    </div>
  );
};

export default Player;
