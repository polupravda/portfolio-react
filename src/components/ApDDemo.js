import React from "react";
import "../App.scss";
import { tagText } from "../Content";
import OldDesktop from "./OldDesktop";
import AppleDesktop from "./AppleDesktop";
import Tag from "./Tag";
import Hint from "./Hint";

class ApDDemo extends React.Component {
  render() {
    return (
      <div className="ap-d-demo-container">
        <div id="old-desktop-all">
          <Tag tagText={tagText.tagBefore} />
          <OldDesktop />
        </div>
        <div id="apple-desktop-all" className="desktop-container-right">
          <Tag tagText={tagText.tagAfter} />
          <AppleDesktop />
        </div>
        <div>
          <Hint />
        </div>
      </div>
    );
  }
}

export default ApDDemo;
