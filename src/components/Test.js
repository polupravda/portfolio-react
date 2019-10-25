import React from "react";
import "../App.scss";
import { Controller, Scene } from "react-scrollmagic";
import ArrowFat from "./ArrowFat";

class Test extends React.Component {
  render() {
    return (
      <div>
        <Controller>
          <Scene duration={600} pin={true} enabled={true}>
            <div>
              <ArrowFat />
            </div>
          </Scene>
          <Scene duration={200} pin={{ pushFollowers: false }}>
            <div>
              <ArrowFat />
            </div>
          </Scene>
          <Scene duration={300} pin={true} offset={100}>
            <div>
              <ArrowFat />
            </div>
          </Scene>
        </Controller>
      </div>
    );
  }
}

export default Test;
