import React from "react";
import Ammo from "./Ammo";

class Gun extends React.Component {

  render() {
    let { ammos } = this.props;
    let ammoCells = [];
    for(let i = 1; i <= ammos; i ++) {
      ammoCells.push(<Ammo key={i} cell={i} />);
    }
    return (
      <div className="gun">
        <div className="ammos-list">
          {ammoCells}
        </div>
        <div className="reload">
          reload
        </div>
      </div>
    );
  }
}

export default Gun;