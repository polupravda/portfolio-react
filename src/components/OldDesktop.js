import React from "react";
import "../App.scss";

function OldDesktop() {
  return (
    <div id="old-desktop-container">
      <img
        src="/assets/images/old-desktop.png"
        alt=""
        className="old-desktop"
      />
      <div className="screen-canvas ap-before-d-canvas">
        <img
          src="/assets/images/AP-before-d.png"
          alt=""
          className="ap-before-d"
        />
      </div>
    </div>
  );
}

export default OldDesktop;
