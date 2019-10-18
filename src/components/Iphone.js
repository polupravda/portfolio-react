import React from "react";
import "../App.scss";

function Iphone() {
  return (
    <div id="iphone-container">
      <img src="/assets/images/iphone.png" alt="" className="pda" />
      <div className="screen-canvas ap-after-canvas">
        <img src="/assets/images/AP-after-m.png" alt="" className="ap-before" />
      </div>
    </div>
  );
}

export default Iphone;
