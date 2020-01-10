import React from "react";
import "../App.scss";

function Ninja() {
  return (
    <div id="ninja">
      <img
        src="/assets/images/ninja-anvil.png"
        alt=""
        className="ninja-anvil"
      />
      <img
        src="/assets/images/ninja-laptop.png"
        alt=""
        className="ninja-laptop"
      />
      <img src="/assets/images/ninja-arm.png" alt="" className="ninja-arm" />
      <img src="/assets/images/ninja-body.png" alt="" className="ninja-body" />
    </div>
  );
}

export default Ninja;
