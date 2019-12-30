import React from "react";
import "../App.scss";

function Trolleybus() {
  return (
    <div id="trolleybus">
      <div id="trolleybus-container">
        <img
          src="/assets/images/trolleybus.png"
          alt="trolleybus"
          id="trolleybus-body"
        />
        <img
          src="/assets/images/trolleybus-arm.png"
          alt="I am waving goodbye"
          id="trolleybus-arm"
        />
      </div>
    </div>
  );
}

export default Trolleybus;
