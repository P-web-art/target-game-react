import React, { Component } from 'react';
import './App.css';
import Control from "./components/Control";
import TargetsList from "./components/TargetsList";
import Gun from "./components/Gun";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Target Game</h1>
        <Control />
        <TargetsList />
        <Gun />
      </div>
    );
  }
}

export default App;
