import React from "react";
import "./App.css";
import Header from "./Header";
import Player from "./Player";

const players = [
  {
    name: "Guil",
    score: 50
  },
  {
    name: "Treasure",
    score: 85
  },
  {
    name: "Ashley",
    score: 95
  },
  {
    name: "James",
    score: 80
  }
];

function App() {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalplayers={1} />
      {players.map(player => (
        <Player name={player.name} score={player.score} />
      ))}

    </div>
  );
}

export default App;
