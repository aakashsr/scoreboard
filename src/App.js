import React from "react";
import "./App.css";
import Header from "./Header";
import Player from "./Player";

function App() {
  return (
    <div className="scoreboard">
      <Header title='Scoreboard' totalplayers={1} />
      <Player />
    </div>
  );
}

export default App;
