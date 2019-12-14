import React from "react";
import "../App.scss";
import { hints } from "../Content";

function Pda() {
  return (
    <div id="pda-container">
      <img src="/assets/images/pda.png" alt="" className="pda" />
      <div className="screen-canvas ap-before-canvas">
        <div className="screen-hint">
          <p>{hints.scrollMe}</p>
        </div>
        <img
          src="/assets/images/ap-before-m.png"
          alt="androidpit web site mobile version before rebranding"
          id="ap-website-mobile-before"
          className="ap-before"
        />
      </div>
    </div>
  );
}

export default Pda;
