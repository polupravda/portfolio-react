import React from "react";
import "../App.scss";

function Goat() {
  return (
    <div id="goat">
      <img src="/assets/images/goat.png" alt="goat" id="goat-body" />
      <div id="goat-fire-1-container">
        <img
          src="/assets/images/goat-fire.png"
          alt="goat shooting fire"
          id="goat-fire-1"
          className="goat-fire"
        />
      </div>
      <div id="goat-fire-2-container">
        <img
          src="/assets/images/goat-fire.png"
          alt="goat shooting fire"
          id="goat-fire-2"
          className="goat-fire"
        />
      </div>
    </div>
  );
}

export default Goat;
