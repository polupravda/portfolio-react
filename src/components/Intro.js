import React from "react";
import "../App.scss";
import Logo from "./Logo";
import { introText } from "../Content.js";

function Intro() {
  return (
    <>
      <Logo />
      <p id="myIntro">{introText.myIntro}</p>
    </>
  );
}

export default Intro;
