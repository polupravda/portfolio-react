import React from "react";
import "../App.scss";
import { tagText } from "../Content";
import OldDesktop from "./OldDesktop";
import AppleDesktop from "./AppleDesktop";
import Tag from "./Tag";
import Hint from "./Hint";

function ApDDemo() {
  return (
    <div className="ap-d-demo-container">
      <div>
        <Tag tagText={tagText.tagBefore} />
        <OldDesktop />
      </div>
      <div className="device-container-right">
        <Tag tagText={tagText.tagAfter} />
        <AppleDesktop />
      </div>
      <div className="">
        <Hint />
      </div>
    </div>
  );
}

export default ApDDemo;
