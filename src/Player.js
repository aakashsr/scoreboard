import React , { PureComponent } from "react";
import Counter from "./Counter";


class Player extends PureComponent {

  render() {
     const {
    changeScore,
    score,
    name,
    removePlayer,
    index,
    player} = this.props ;

     return (
    <div className="player">
      <span className="player-name">
        <button
          onClick={() => removePlayer(player)}
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
      />
    </div>
  );
}
};

export default Player;
