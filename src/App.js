import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

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

  // Counter

  prevPlayerid = this.state.players.length;

  // removePlayer = index => {
  //   let newState = { ...this.state };
  //   newState.players.splice(index,1);
  //   this.setState(newState);
  // };

  highestScorer = () => {
    this.state.players.reduce((prev, player) => {
      return prev.score > player.score ? prev.score : player.score;
    });
  };

  removePlayer = player => {
    this.setState(currentState => ({
      players: currentState.players.filter(c => {
        return player.id !== c.id;
      })
    }));
  };

  // handleScoreChange = (index,delta) => {
  //   let newState = {...this.state};
  //   newState.players[index].score = this.state.players[index].score + delta;
  //   this.setState(
  //     newState
  //   );
  // };

  addNewPlayer = name => {
    this.setState(prevContacts => ({
      players: [
        ...prevContacts.players,
        {
          name: name,
          score: 0,
          id: (this.prevPlayerid += 1)
        }
      ]
    }));
  };

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      state: (prevState.players[index].score += delta)
    }));
  };

  handleScoreChangeAndHighestScore = (index, delta) => {
    this.handleScoreChange(index, delta);
    this.highestScorer();
  };

  render() {
    console.log(this.highestScorer());
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {this.state.players.map((player, index) => (
          <Player
            // key={player.id.toString()}
            id={player.id}
            player={player}
            index={index}
            score={player.score}
            name={player.name}
            removePlayer={this.removePlayer}
            changeScore={this.handleScoreChange}
            highestScorer={this.highestScorer}
            handleScoreChangeAndHighestScore={
              this.handleScoreChangeAndHighestScore
            }
            // score={player.score}
          />
        ))}
        <AddPlayerForm addPlayer={this.addNewPlayer} />
      </div>
    );
  }
}

export default App;
