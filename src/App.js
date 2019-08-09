import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Player from "./Player";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  removePlayer = id => {
    this.setState(currentState => ({
      players: currentState.players.filter(c => c.id !== id)
    }));
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalplayers={this.state.players.length} />
        {this.state.players.map(player => (
          <Player
            key={player.id.toString()}
            id={player.id}
            score={player.score}
            name={player.name}
            removePlayer={this.removePlayer}
            // score={player.score}
          />
        ))}
      </div>
    );
  }
}

export default App;
