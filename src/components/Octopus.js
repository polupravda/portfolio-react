import React from "react";
import "../App.scss";

class Octopus extends React.Component {
  render() {
    return (
      <>
        <div id="octopus-anim">
          <div id="egg">
            <img src="/assets/images/egg-top.png" alt="egg-top" id="egg-top" />
            <img
              src="/assets/images/egg-bottom.png"
              alt="egg-bottom"
              id="egg-bottom"
            />
          </div>
          <div className={this.props.octopusLifeAnim}>
            <div id="octopus-float-x-anim">
              <div id="octopus-float-y-anim">
                <div id="octopus-wings">
                  <img
                    src="/assets/images/octopus-wing-left.png"
                    alt="octopus-wing-left"
                    id="octopus-wing-left"
                  />
                  <img
                    src="/assets/images/octopus-wing-right.png"
                    alt="octopus-wing-right"
                    id="octopus-wing-right"
                  />
                </div>
                <div id="octopus"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Octopus;
