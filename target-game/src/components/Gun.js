import React from "react";
import Ammo from "./Ammo";
import revolver from "../img/revolver.png";

class Gun extends React.Component {

  render() {
    let { ammos, reload } = this.props;
    let ammoCells = [];
    for(let i = 1; i <= ammos; i ++) {
      ammoCells.push(<Ammo key={i} cell={i} />);
    }
    return (
      <div className="gun">
        <div className="ammos-list">
          {ammoCells}
        </div>
        <div 
        className="reload"
        onClick={reload}
        >
          <img className="revolver" src={revolver} alt="revolver" />
        </div>
      </div>
    );
  }
}

export default Gun;