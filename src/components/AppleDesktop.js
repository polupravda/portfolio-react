import React from "react";
import "../App.scss";

function AppleDesktop() {
  return (
    <div id="apple-desktop-container">
      <img
        src="/assets/images/apple-desktop.png"
        alt=""
        className="apple-desktop"
      />
      <div className="screen-canvas ap-after-d-canvas">
        <img
          src="/assets/images/AP-after-d.png"
          alt=""
          className="ap-after-d"
        />
      </div>
    </div>
  );
}

export default AppleDesktop;
