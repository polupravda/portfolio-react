import React from "react";
import "../App.scss";

function Pda() {
  return (
    <div id="pda-container">
      <img src="/assets/images/pda.png" alt="" className="pda" />
      <div className="screen-canvas ap-before-canvas">
        <img
          src="/assets/images/AP-before-m.png"
          alt=""
          className="ap-before"
        />
      </div>
    </div>
  );
}

export default Pda;
