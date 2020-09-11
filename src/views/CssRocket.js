import React from "react";
import "../App.scss";
import { bonus2 } from "../Content.js";
import Bonus2 from "../components/Bonus2";
import LogoSass from "../components/LogoSass";
import LogoPug from "../components/LogoPug";

class CssRocket extends React.Component {
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
      <section id="css-rocket" className={this.state.introAnim}>
        <div id="cr-scene-1" className={"apit-scene " + this.state.introAnim}>
          <Bonus2 />
          <h2 className="headline-2">{bonus2.headlineMain}</h2>
          <h2 className="subline role">{bonus2.subline}</h2>
          <div className="tech-stack-container">
            <LogoPug />
            <LogoSass />
          </div>
          <h2 className="subline years">{bonus2.years}</h2>
          <h2 className="subline used-tools">{bonus2.usedTools}</h2>
        </div>
        <iframe
          className="codepen"
          height="500"
          scrolling="no"
          title="CSS Rocket"
          src="https://codepen.io/polupravda/embed/gEEGvY?height=457&theme-id=light&default-tab=css,result"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen
          <a href="https://codepen.io/polupravda/pen/gEEGvY">CSS Rocket</a> by
          Elena (<a href="https://codepen.io/polupravda">@polupravda</a>) on
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </section>
    );
  }
}

export default CssRocket;
