import React, { Component } from 'react';
import './App.css';
import Control from "./components/Control";
import TargetsList from "./components/TargetsList";
import Gun from "./components/Gun";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>Target Game</h1>
        <Control />
        <TargetsList cells={12}/>
        <Gun ammos={6}/>
      </div>
    );
  }
}

export default App;
