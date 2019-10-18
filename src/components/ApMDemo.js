import React from "react";
import "../App.scss";
import { tagText } from "../Content";
import Pda from "./Pda";
import Iphone from "./Iphone";
import Rope from "./Rope";
import Hint from "./Hint";

function ApMDemo() {
  return (
    <div className="ap-m-demo-container">
      <div>
        <Rope tagText={tagText.tagBefore} />
        <Pda />
      </div>
      <div className="device-container-right">
        <Rope tagText={tagText.tagAfter} />
        <Iphone />
      </div>
      <div className="">
      <Hint />
      </div>
    </div>
  );
}

export default ApMDemo;
