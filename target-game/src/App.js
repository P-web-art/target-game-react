import React, { Component } from 'react';
import './App.css';
import Control from "./components/Control";
import TargetsList from "./components/TargetsList";
import Gun from "./components/Gun";
import Sound from 'react-sound';
import ReloadMsg from "./components/ReloadMsg";
import lolex from "lolex";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reloadMsg: [],
      lives: 20,
      points: 0,
      ammos: 6,
      // cell1: false,
      // cell2: false,
      // cell3: false,
      // cell4: false,
      // cell5: false,
      // cell6: false,
      // cell7: false,
      // cell8: false,
      // cell9: false,
      // cell10: false,
      // cell11: false,
      // cell12: false
    };
  }

  // helper = (num) => {
  //   switch(num) {
  //     case 0:
  //       this.setState({cell1: true});
  //       break;
  //     case 1:
  //       this.setState({cell2: true});
  //       break;
  //     case 2:
  //       this.setState({cell3: true});
  //       break;
  //     case 3:
  //       this.setState({cell4: true});
  //       break;
  //     case 4:
  //       this.setState({cell5: true});
  //       break;
  //     case 5:
  //       this.setState({cell6: true});
  //       break;
  //     case 6:
  //       this.setState({cell7: true});
  //       break;
  //     case 7:
  //       this.setState({cell8: true});
  //       break;
  //     case 8:
  //       this.setState({cell9: true});
  //       break;
  //     case 9:
  //       this.setState({cell10: true});
  //       break;
  //     case 10:
  //       this.setState({cell11: true});
  //       break;
  //     case 11:
  //       this.setState({cell12: true});
  //       break;
  //     default:
  //       return;
  //   }
  // }

  // helperRemove = (num) => {
  //   switch(num) {
  //     case 0:
  //       this.setState({cell1: false});
  //       break;
  //     case 1:
  //       this.setState({cell2: false});
  //       break;
  //     case 2:
  //       this.setState({cell3: false});
  //       break;
  //     case 3:
  //       this.setState({cell4: false});
  //       break;
  //     case 4:
  //       this.setState({cell5: false});
  //       break;
  //     case 5:
  //       this.setState({cell6: false});
  //       break;
  //     case 6:
  //       this.setState({cell7: false});
  //       break;
  //     case 7:
  //       this.setState({cell8: false});
  //       break;
  //     case 8:
  //       this.setState({cell9: false});
  //       break;
  //     case 9:
  //       this.setState({cell10: false});
  //       break;
  //     case 10:
  //       this.setState({cell11: false});
  //       break;
  //     case 11:
  //       this.setState({cell12: false});
  //       break;
  //     default:
  //       return;
  //   }
  // }

  // resetCell = () => {
  //   this.setState({
  //     cell1: false,
  //     cell2: false,
  //     cell3: false,
  //     cell4: false,
  //     cell5: false,
  //     cell6: false,
  //     cell7: false,
  //     cell8: false,
  //     cell9: false,
  //     cell10: false,
  //     cell11: false,
  //     cell12: false
  //   });
  // }

  start = (e) => {
    var clock = lolex.createClock(1000);
    let test = 10;
 
    var id = clock.setInterval(callback, 1000)

    function callback() {
      console.log("This is a test");
      console.log(test);
      test --;

      if(test === 0) {
        clock.clearInterval(id);
      }
      clock.runAll();
      
    }

    e.target.disabled = true;
    setInterval(() => {
      this.resetCell();
      let showTargets = [];
      while(showTargets.length !== 4) {
        let rand = Math.floor(Math.random() * 12);
        if(!showTargets.includes(rand)) {
          showTargets.push(rand);
        }
      }

      for(let i = 0; i < showTargets.length; i ++) {
        this.helper(showTargets[i]);
      }
    }, 3000);
  }

  shoot = () => {
    if(this.state.ammos <= 0) {
      this.setState({
        reloadMsg: [...this.state.reloadMsg, "RELOAD"]
      });
    } else {
    this.setState({ammos: this.state.ammos - 1});
    }
  }

  reload = () => {
    this.setState({ammos: 6, reloadMsg: []});
  }

  hitTarget = (target) => {
    if(this.state.ammos <= 0) {
    } else {
      this.setState({points: this.state.points + 1});
      this.helperRemove(target);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Target Game</h1>
        <h3>Timer: </h3>
        <ReloadMsg 
        reloadMsg={this.state.reloadMsg}
        />
        <Control 
        start={this.start}
        points={this.state.points}
        lives={this.state.lives}
        />
        
        {/* <TargetsList 
        shoot={this.shoot}
        hitTarget={this.hitTarget}
        cell1={this.state.cell1}
        cell2={this.state.cell2}
        cell3={this.state.cell3}
        cell4={this.state.cell4}
        cell5={this.state.cell5}
        cell6={this.state.cell6}
        cell7={this.state.cell7}
        cell8={this.state.cell8}
        cell9={this.state.cell9}
        cell10={this.state.cell10}
        cell11={this.state.cell11}
        cell12={this.state.cell12}
        /> */}
        <Gun 
        ammos={this.state.ammos}
        reload={this.reload}
        />
      </div>
    );
  }
}

export default App;
