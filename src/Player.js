import React from "react";
import Counter from "./Counter";

const Player = props => {
  const playername  = props.name;
  return (
    <div className="player">
      <span className="player-name">{playername}</span>
      <Counter score={props.score} />
    </div>
  );
};

export default Player;
