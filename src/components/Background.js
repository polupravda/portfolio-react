import React from "react";
import "../App.scss";
import { debounce } from "../helperFunctions";

import Ufo from "../components/Ufo";
import Rocket from "../components/Rocket";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.debouncedResizeListener = debounce(this.updateVh);
  }

  updateVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  componentDidMount() {
    this.updateVh();
    window.addEventListener("resize", this.debouncedResizeListener);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debouncedResizeListener);
  }

  render() {
    return (
      <div id="background">
        <div className="bgCanvas">
          <Rocket />
          <Ufo />
          <div className="foreground"></div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Background;
