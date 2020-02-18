import React from "react";
import "../App.scss";

function Bear() {
  return (
    <div id="bear-container-cycling">
      <div id="bear-container">
        <img
          src="/assets/images/leg-back.png"
          alt="leg-back"
          className="leg leg-back"
        />
        <img src="/assets/images/bb-gate.png" alt="" className="bb-gate" />
        <img
          src="/assets/images/wheel-back.png"
          alt="wheel"
          className="wheel wheel-back"
        />
        <img
          src="/assets/images/wheel-back.png"
          alt="wheel-back"
          className="wheel wheel-front"
        />
        <img src="/assets/images/bear-core.png" alt=" " id="bear-core" />
        <img
          src="/assets/images/leg-front.png"
          alt="leg-front"
          className="leg leg-front"
        />
      </div>
    </div>
  );
}

export default Bear;
