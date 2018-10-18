import React from "react";

class Button extends React.Component {

  render() {
    let { start } = this.props;
    return (
      <button onClick={start}>{this.props.name}</button>
    );
  }
}

export default Button;