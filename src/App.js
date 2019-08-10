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

  // removePlayer = index => {
  //   let newState = { ...this.state };
  //   newState.players.splice(1, index);
  //   this.setState(newState);
  // };

  removePlayer = id => {
    this.setState(currentState => ({
        players: currentState.players.filter(c => {
        return id !== c.id;
      })
    }))
  }

  // incrementScore = index => {
  //   console.log('logging');
  //   let newState = {...this.state};
  //   newState.players[index].score = this.state.players[index].score+1;
  //   this.setState(
  //     newState
  //   );
  // };


  // decrementScore = index => {
  //   let newState = { ...this.state };
  //   newState.players[index].score = this.state.players[index].score - 1;
  //   this.setState(newState);
  // };

  handleScoreChange = (index, delta) => {
    // console.log("index: " + index, "delta: " + delta);

      this.setState(prevState => ({
        // this.state.players[index].score = prevState.players[index].score - 1;
        state: prevState.players[index].score += delta
      }))
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalplayers={this.state.players.length} />
        {this.state.players.map((player, index) => (
          <Player
            key={player.id.toString()}
            id={player.id}
            index={index}
            score={player.score}
            name={player.name}
            removePlayer={this.removePlayer}
            changeScore={this.handleScoreChange}
            // score={player.score}
          />
        ))}
      </div>
    );
  }
}

export default App;
