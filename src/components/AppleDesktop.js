import React from "react";
import "../App.scss";

function AppleDesktop() {
  return (
    <div id="apple-desktop-container">
      <img
        src="/assets/images/apple-desktop.png"
        alt="old version androidpit website"
        className="apple-desktop"
      />
      <div className="screen-canvas ap-after-d-canvas">
        <img
          src="/assets/images/AP-after-d.png"
          alt="androidpit web site destop version after rebranding"
          id="ap-website-desktop-after"
          className="ap-after-d"
        />
      </div>
    </div>
  );
}

export default AppleDesktop;
