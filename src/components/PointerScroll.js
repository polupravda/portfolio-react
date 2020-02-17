import React from "react";
import "../App.scss";
import { introText } from "../Content";

class PointerScroll extends React.Component {
  render() {
    return (
      <div id="pointer-scroll" className={this.props.animClass}>
        <div id="pointer-scroll-text">{introText.scroll}</div>
        <div id="pointer-scroll-hand-container">
          <img
            src="/assets/images/pointer-scroll.png"
            alt="scroll"
            id="pointer-scroll-hand"
          />
        </div>
      </div>
    );
  }
}

export default PointerScroll;
