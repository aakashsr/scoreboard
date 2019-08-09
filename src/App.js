import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Player from "./Player";

const players = [
  {
    name: "Guil",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
];

class App extends Component {

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalplayers={players.length} />
        {players.map(player => (
          <Player
            key={player.id.toString()}
            name={player.name}
            // score={player.score}
          />
        ))}
      </div>
    );
  }
}

export default App;
