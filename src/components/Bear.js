import React from "react";
import "../App.scss";

function Bear() {
  return (
    <div id="bear-container">
      <img src="/assets/images/leg-back.png" alt="" class="leg leg-back" />
      <img src="/assets/images/bb-gate.png" alt="" class="bb-gate" />
      <img
        src="/assets/images/wheel-back.png"
        alt=""
        class="wheel wheel-back"
      />
      <img
        src="/assets/images/wheel-back.png"
        alt=""
        class="wheel wheel-front"
      />
      <img src="/assets/images/bear-core.png" alt=" " id="bear-core" />
      <img src="/assets/images/leg-front.png" alt="" class="leg leg-front" />
    </div>
  );
}

export default Bear;
