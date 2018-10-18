import React from "react";
import Target from "./Target";

class TargetList extends React.Component {

  render() {
    let { cells } = this.props;
    let targets = [];
    for(let i = 1; i <= cells; i ++) {
      targets.push(<Target key={i} cell={i} />)
    }
    return (
      <div className="target-list">
        {targets}
      </div>
    );
  }
}

export default TargetList;