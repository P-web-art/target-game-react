import React from "react";
import Button from "./Button";

class Control extends React.Component {

  render() {
    let { start, points, lives } = this.props;
    return (
      <div className="controls">
        <div className="lives">Lives: {lives}</div>
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