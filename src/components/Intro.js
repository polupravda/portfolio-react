import React from "react";
import "../App.scss";
import Logo from "./Logo";

function Intro({ introText }) {
  return (
    <div id="intro">
      <Logo />
      <p class="text-vertical">{introText.myTitle}</p>
    </div>
  );
}

export default Intro;
