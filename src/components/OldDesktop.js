import React from "react";
import "../App.scss";

function OldDesktop() {
  return (
    <div id="old-desktop-container">
      <img
        src="/assets/images/old-desktop.png"
        alt="old demo desktop"
        className="old-desktop"
      />
      <div className="screen-canvas ap-before-d-canvas">
        <img
          src="/assets/images/ap-before-d.png"
          alt="androidpit web site destop version before rebranding"
          id="ap-website-desktop-before"
          className="ap-before-d"
        />
      </div>
    </div>
  );
}

export default OldDesktop;
