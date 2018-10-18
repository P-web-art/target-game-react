import React from "react";
import target from "../img/target.png";

class Target extends React.Component {

  render() {
    let { show, hitTarget, name} = this.props;
    let targetItem;
    if(show) {
      targetItem = (<div 
        className="target-item"
        onClick={() => hitTarget(name)}
        >
        <img className="target-img" src={target} alt="target"/>
        </div>)
    } else {
      targetItem = null;
    }

    return (
      <div 
      className="target"
      >
        {targetItem} 
      </div>
    );
  }
}

export default Target;