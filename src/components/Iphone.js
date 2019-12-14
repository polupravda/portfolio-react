import React from "react";
import "../App.scss";
import { hints } from "../Content";

function Iphone() {
  return (
    <div id="iphone-container">
      <img src="/assets/images/iphone.png" alt="" className="pda" />
      <div className="screen-canvas ap-after-canvas">
        <div className="screen-hint">
          <p>{hints.scrollMe}</p>
        </div>
        <img
          src="/assets/images/ap-after-m.png"
          alt="androidpit web site mobile version after rebranding"
          id="ap-website-mobile-after"
          className="ap-after"
        />
      </div>
    </div>
  );
}

export default Iphone;
