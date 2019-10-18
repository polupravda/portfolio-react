import React from "react";
import "../App.scss";
import Ufo from "../components/Ufo";
import Rocket from "../components/Rocket";

function Background(props) {
  return (
    <div id="background">
      <div className="bgCanvas">
        <Rocket />
        <Ufo />
        <div className="foreground"></div>
      </div>
      {props.children}
    </div>
  );
}

export default Background;
