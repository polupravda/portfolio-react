import React from "react";
import "../App.scss";
import { tagText } from "../Content";
import Pda from "./Pda";
import Iphone from "./Iphone";
import Rope from "./Rope";
import Hint from "./Hint";

class ApMDemo extends React.Component {
  state = {
    demoDevice1IsActive: false,
    demoDevice2IsActive: false,
    demoDeviceMobile1Class: "demo-device-mobile-small",
    demoDeviceMobile2Class: "demo-device-mobile-small",
  };

  handleDemoDevice(trigger) {
    if (this.state.demoDevice1IsActive) {
      this.setState({
        demoDeviceMobile1Class: "demo-device-mobile-zooming-out",
        demoDevice1IsActive: !this.state.demoDevice1IsActive
      });
      setTimeout(() => {
        this.setState({ demoDeviceMobile1Class: "demo-device-mobile-small" });
      }, 300);
    } else {
      this.setState({
        demoDeviceMobile1Class: "demo-device-mobile-zooming-in",
        demoDevice1IsActive: !this.state.demoDevice1IsActive
      });
      setTimeout(() => {
        this.setState({ demoDeviceMobile1Class: "demo-device-mobile-big" });
      }, 300);
    }
    console.log(trigger);
  }

  render() {
    return (
      <div className="ap-m-demo-container">
        <div
          id="pda-all"
          className={this.state.demoDeviceMobile1Class}
          onClick={() => this.handleDemoDevice('pda')}
        >
          <Rope tagText={tagText.tagBefore} />
          <Pda />
        </div>
        <div
          id="iphone-all"
          className={
            "mobile-container-right " +
            (this.state.demoDevice2IsActive
              ? "demo-device-active"
              : "demo-device-inactive")
          }
          onClick={() =>
            this.setState(state => ({
              demoDevice2IsActive: !this.state.demoDevice2IsActive
            }))
          }
        >
          <Rope tagText={tagText.tagAfter} />
          <Iphone />
        </div>
        <div className="">
          <Hint />
        </div>
      </div>
    );
  }
}

export default ApMDemo;
