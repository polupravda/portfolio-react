import React from "react";
import "../App.scss";

function Theatre() {
  return (
    <div id="theatre">
      <div id="theatre-bla-container">
    <img
        src="/assets/images/theatre-bla.png"
        alt=""
        id="theatre-bla"
      />
      </div>
      <img
        src="/assets/images/theatre-me.png"
        alt=""
        id="theatre-me"
      />
      <img
        src="/assets/images/theatre-microphone.png"
        alt=""
        id="theatre-microphone"
      />
      <img src="/assets/images/theatre-curtain-left.png" alt="" id="theatre-curtain-left" />
      <img src="/assets/images/theatre-curtain-right.png" alt="" id="theatre-curtain-right" />
      <img src="/assets/images/theatre-frame.png" alt="" id="theatre-frame" />
    </div>
  );
}

export default Theatre;
