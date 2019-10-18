import React from "react";
import "../App.scss";
import Logo from "./Logo";
import { introText } from "../Content.js";

function Intro() {
  return (
    <div id="intro">
      <div className="column">
        <div className="row">
          <p className="text-vertical">{introText.myTitle}</p>
          <Logo />
        </div>
        <p className="myIntro">{introText.myIntro}</p>
      </div>
    </div>
  );
}

export default Intro;
