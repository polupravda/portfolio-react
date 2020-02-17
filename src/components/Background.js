import React from "react";
import "../App.scss";
import { debounce, updateVh } from "../helperFunctions";

import Ufo from "../components/Ufo";
import Rocket from "../components/Rocket";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.debouncedResizeListener = debounce(updateVh);
  }

  componentDidMount() {
    updateVh();
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
          <div className="foreground images-loaded-container" />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Background;
