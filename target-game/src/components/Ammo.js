import React from "react";
import ammo from "../img/ammo.png";

class Ammo extends React.Component {

  render() {
    return (
      <div className="ammo">
        <img src={ammo} alt="ammo" className="ammo-img"/>
      </div>
    );
  }
}

export default Ammo;