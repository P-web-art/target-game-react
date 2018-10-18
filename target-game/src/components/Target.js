import React from "react";

class Target extends React.Component {

  render() {
    let { cell, show } = this.props;
    return (
      <div 
      className="target"
      >
        {show && (<div 
        // id={`cell${cell}`}
        className="target-item"
        >
        Show {cell}
        {/* {show ? <p>Show this {cell}</p>: null} */}
        </div> )}
       
      </div>
    );
  }
}

export default Target;