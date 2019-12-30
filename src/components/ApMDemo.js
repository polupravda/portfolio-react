import React from "react";
import "../App.scss";
import { hints } from "../Content";
import Pda from "./Pda";
import Iphone from "./Iphone";
import Rope from "./Rope";
import Tag from "./Tag";

class ApMDemo extends React.Component {
  state = {
    demoDevice1IsActive: false,
    demoDevice2IsActive: false,
    demoDevice1Class: "demo-device-mobile-small",
    demoDevice2Class: "demo-device-mobile-small"
  };

  handleDemoDevice = trigger => {
    if (this.state[`demo${trigger}IsActive`]) {
      this.setState({
        [`demo${trigger}Class`]: "demo-device-mobile-zooming-out",
        [`demo${trigger}IsActive`]: !this.state[`demo${trigger}IsActive`]
      });
      setTimeout(() => {
        this.setState({ [`demo${trigger}Class`]: "demo-device-mobile-small" });
      }, 500);
    } else {
      this.setState({
        [`demo${trigger}Class`]: "demo-device-mobile-zooming-in",
        [`demo${trigger}IsActive`]: !this.state[`demo${trigger}IsActive`]
      });
      setTimeout(() => {
        this.setState({ [`demo${trigger}Class`]: "demo-device-mobile-big" });
      }, 500);
    }
    console.log(trigger);
  };

  render() {
    return (
      <div className="ap-m-demo-container">
        <div
          id="pda-all"
          className={this.state.demoDevice1Class}
          onClick={() => this.handleDemoDevice("Device1")}
        >
          <Rope />
          <Pda />
        </div>
        <Tag tagText={hints.clickOrScroll} />
        <div
          id="iphone-all"
          className={this.state.demoDevice2Class}
          onClick={() => this.handleDemoDevice("Device2")}
        >
          <Rope />
          <Iphone />
        </div>
      </div>
    );
  }
}

export default ApMDemo;
