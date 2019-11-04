import React from "react";
import "../App.scss";

function Pda() {
  return (
    <div id="pda-container">
      <img src="/assets/images/pda.png" alt="" className="pda" />
      <div className="screen-canvas ap-before-canvas">
        <img
          src="/assets/images/AP-before-m.png"
          alt="androidpit web site mobile version before rebranding"
          id="ap-website-mobile-before"
          className="ap-before"
        />
      </div>
    </div>
  );
}

export default Pda;
