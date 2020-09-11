import React from "react";
import "../App.scss";
import { bonus1 } from "../Content.js";
import Bonus1 from "../components/Bonus1";
import LogoSass from "../components/LogoSass";
import LogoSvg from "../components/LogoSvg";

class DigitalAnvilLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introAnim: "hidden"
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);

    // Animate the first Scene after loading
    setTimeout(() => {
      this.setState({ introAnim: "intro-anim" });
    }, 1000);
  }

  render() {
    return (
      <section id="digital-anvil-logo" className={this.state.introAnim}>
        <div id="da-scene-1" className={"apit-scene " + this.state.introAnim}>
          <Bonus1 />
          <h2 className="headline-2">{bonus1.headlineMain}</h2>
          <h2 className="subline role">{bonus1.subline}</h2>
          <div className="tech-stack-container">
            <LogoSvg />
            <LogoSass />
          </div>
          <h2 className="subline years">{bonus1.years}</h2>
          <h2 className="subline used-tools">{bonus1.usedTools}</h2>
        </div>
        <iframe
          className="codepen"
          height="500"
          scrolling="no"
          title="Digital-Anvil-logo-beigeBG"
          src="https://codepen.io/polupravda/embed/zYGKPrQ?height=265&theme-id=light&default-tab=html,result"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/polupravda/pen/zYGKPrQ">
            Digital-Anvil-logo-beigeBG
          </a>
          by Elena (<a href="https://codepen.io/polupravda">@polupravda</a>) on
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </section>
    );
  }
}

export default DigitalAnvilLogo;
