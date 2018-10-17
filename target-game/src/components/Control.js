import React from "react";
import Button from "./Button";

class Control extends React.Component {

  render() {
    return (
      <div className="controls">
        <div className="lives">Lives: 0</div>
        <Button className="control-btn" name={"start"} />
        <Button className="control-btn" name={"pause"} />
        <Button className="control-btn" name={"reset"} />
        <div className="points">Points: 0</div>
      </div>
    );
  }
}

export default Control;