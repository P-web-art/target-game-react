import React from "react";
import Button from "./Button";

class Control extends React.Component {

  render() {
    let { start, points } = this.props;
    return (
      <div className="controls">
        <div className="lives">Lives: 0</div>
        <Button 
        className="control-btn" 
        name={"start"} 
        start={start}
        />
        <Button className="control-btn" name={"pause"} />
        <Button className="control-btn" name={"reset"} />
        <div className="points">Points: {points}</div>
      </div>
    );
  }
}

export default Control;