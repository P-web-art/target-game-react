import React, { Component } from 'react';
import './App.css';
import Control from "./components/Control";
import TargetsList from "./components/TargetsList";
import Gun from "./components/Gun";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cells: 12,
      ammos: 6
    };
  }

  shoot = () => {
    this.setState({ammos: this.state.ammos - 1});
  }

  reload = () => {
    this.setState({ammos: 6});
  }

  render() {
    return (
      <div className="App">
        <h1>Target Game</h1>
        <Control />
        <TargetsList 
        cells={this.state.cells}
        shoot={this.shoot}
        />
        <Gun 
        ammos={this.state.ammos}
        reload={this.reload}
        />
      </div>
    );
  }
}

export default App;
