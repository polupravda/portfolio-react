import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import {
  aPitProject,
  motorola5GBattleProject,
  bonus1,
  bonus2
} from "../Content";

import APitDesignSystemHeadline3Lines from "../components/APitDesignSystemHeadline3Lines";
import Motorola5GBattleHeadline3Lines from "../components/Motorola5GBattleHeadline3Lines";
import Bonus1 from "../components/Bonus1";
import Bonus2 from "../components/Bonus2";
import DigitalAnvilLogoDemo from "../components/DigitalAnvilLogoDemo";
import CssRocketDemo from "../components/CssRocketDemo";

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introAnim: "hidden",
      logoUpdate: true
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);

    // Animate the first Scene after loading
    setTimeout(() => {
      this.setState({ introAnim: "intro-anim" });
    }, 1000);

    // Refresh Digital Anvil logo animation
    setInterval(() => {
      this.setState({ logoUpdate: false });
      setTimeout(() => {
        this.setState({ logoUpdate: true });
      }, 200);
    }, 8000);
  }

  render() {
    return (
      <section id="works" className={this.state.introAnim}>
        <div id="work-apit" className="work-demo">
          <Link to="/apit">
            <APitDesignSystemHeadline3Lines />
            <h2 className="headline-2">{aPitProject.headlineMain2}</h2>
            <div className="flex">
              <h2 className="subline" id="years">
                {aPitProject.years}
              </h2>
              <h2 className="subline used-tools">{aPitProject.usedTools}</h2>
            </div>
            <img
              id="apit-thumbnail"
              src="/assets/images/apit-main-thumbnail.png"
              alt={motorola5GBattleProject.img1Description}
            />
          </Link>
        </div>
        <div id="work-motorola" className="work-demo">
          <Link to="/motorola-5g-battle">
            <Motorola5GBattleHeadline3Lines />
            <h2 className="headline-2">
              {motorola5GBattleProject.headlineMain2}
            </h2>
            <div className="flex">
              <h2 className="subline" id="years">
                {motorola5GBattleProject.years}
              </h2>
              <h2 className="subline used-tools">
                {motorola5GBattleProject.usedTools}
              </h2>
            </div>
            <img
              id="motorola-thumbnail"
              src="/assets/images/motorola-main-thumbnail.png"
              alt={motorola5GBattleProject.img1Description}
            />
          </Link>
        </div>
        <div id="work-bonus-1" className="work-demo-bonus">
          <Link to="/digital-anvil-logo">
            <Bonus1 />
            <h2 className="headline-2">{bonus1.headlineMain}</h2>
            <div className="flex">
              <h2 className="subline years">{bonus1.years}</h2>
              <h2 className="subline used-tools">{bonus1.usedTools}</h2>
            </div>
            <DigitalAnvilLogoDemo logoUpdate={this.state.logoUpdate} />
          </Link>
        </div>
        <div id="work-bonus-2" className="work-demo-bonus">
          <Link to="/css-rocket">
            <Bonus2 />
            <h2 className="headline-2">{bonus2.headlineMain}</h2>
            <div className="flex">
              <h2 className="subline years">{bonus2.years}</h2>
              <h2 className="subline used-tools">{bonus2.usedTools}</h2>
            </div>
            <CssRocketDemo />
          </Link>
        </div>
      </section>
    );
  }
}

export default Works;
