import React from "react";
import "../App.scss";
import { introText } from "../Content";

function PointerScroll({ animClass }) {
  return (
    <div id="pointer-scroll" className={animClass}>
      <div id="pointer-scroll-text">{introText.scroll}</div>
      <div id="pointer-scroll-hand-container">
        <img
          src="/assets/images/pointer-scroll.png"
          alt="scroll"
          id="pointer-scroll-hand"
          className="images-loaded-container"
        />
      </div>
    </div>
  );
}

export default PointerScroll;
