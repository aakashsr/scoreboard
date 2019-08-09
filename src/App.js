import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Player from "./Player";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
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
