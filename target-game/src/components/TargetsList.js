import React from "react";
import Target from "./Target";

class TargetList extends React.Component {
  constructor() {
    super();
 
  }

  render() {
    let { shoot, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9, cell10, cell11, cell12} = this.props;
    return (
      <div 
      className="target-list" 
      onClick={shoot}
      >
        <Target show={cell1} />
        <Target show={cell2} />
        <Target show={cell3} />
        <Target show={cell4} />
        <Target show={cell5} />
        <Target show={cell6} />
        <Target show={cell7} />
        <Target show={cell8} />
        <Target show={cell9} />
        <Target show={cell10} />
        <Target show={cell11} />
        <Target show={cell12} />
      </div>
    );
  }
}

export default TargetList;