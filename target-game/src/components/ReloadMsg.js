import React from "react";

const ReloadMsg = ({reloadMsg}) => {
  const msg = reloadMsg.map((msg) => {
    return <li>{msg}</li>
  })
  return (
    <div className="reload-msg">{msg}</div>
  )
}

export default ReloadMsg;