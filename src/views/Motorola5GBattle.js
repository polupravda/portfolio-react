import React from "react";
import "../App.scss";
import { motorola5GBattleProject } from "../Content";
import Motorola5GBattleHeadline from "../components/Motorola5GBattleHeadline";
import LogoSass from "../components/LogoSass";
import LogoReact from "../components/LogoReact";
import LogoGatsby from "../components/LogoGatsby";
import Button from "../components/Button";

class Motorola5GBattle extends React.Component {
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
      <section id="motorola-work-container">
        <div
          id="motorola-scene-1"
          className={"apit-scene " + this.state.introAnim}
        >
          <Motorola5GBattleHeadline />
          <h2 className="headline-2">{motorola5GBattleProject.headlineMain2}</h2>
          <h2 className="subline role">
            {motorola5GBattleProject.subline}
          </h2>
          <div className="tech-stack-container">
            <LogoSass />
            <LogoReact />
            <LogoGatsby />
          </div>
          <h2 className="subline years">
            {motorola5GBattleProject.years}
          </h2>
          <h2 className="subline used-tools">
            {motorola5GBattleProject.usedTools}
          </h2>
          <h2 className="subline credits">
            {motorola5GBattleProject.credits}
          </h2>
        </div>
        <div id="motorola-scene-2" className="apit-scene">
          <div className="description">
            {motorola5GBattleProject.paragraph1}
          </div>
          <video autoPlay muted loop id="motorola-home-d">
            <source src="assets/videos/motorola-home-d.mp4" type="video/mp4" />
          </video>
        </div>
        <div id="motorola-scene-3" className="apit-scene">
          <img
            id="motorola-logo"
            src="/assets/images/motorola-logo-full.png"
            alt={motorola5GBattleProject.img1Description}
          />
          <div>
            <p>{motorola5GBattleProject.paragraph2}</p>
          </div>
          <video autoPlay muted loop id="motorola-features-m">
            <source
              src="assets/videos/motorola-features-m.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div id="motorola-scene-4" className="apit-scene">
          <div className="description">
            {motorola5GBattleProject.paragraph3}
          </div>
          <img
            id="motorola-intro"
            src="/assets/images/motorola-intro.png"
            alt={motorola5GBattleProject.img1Description}
          />
          <div className="description-2">
            {motorola5GBattleProject.paragraph4}
          </div>
          <img
            id="motorola-calendar"
            src="/assets/images/motorola-calendar.png"
            alt={motorola5GBattleProject.img2Description}
          />
        </div>
        <div id="motorola-scene-5" className="apit-scene">
          <div className="description">
            {motorola5GBattleProject.paragraph5}
          </div>
          <img
            id="motorola-scores"
            src="/assets/images/motorola-scores.png"
            alt={motorola5GBattleProject.img3Description}
          />
          <img
            id="motorola-scores-m"
            src="/assets/images/motorola-scores-m.png"
            alt={motorola5GBattleProject.img4Description}
          />
        </div>
        <div id="motorola-scene-6" className="apit-scene">
          <div className="description">
            {motorola5GBattleProject.paragraph6}
          </div>
          <img
            id="motorola-slider"
            src="/assets/images/motorola-slider.png"
            alt={motorola5GBattleProject.img5Description}
          />
          <img
            id="motorola-slider-m"
            src="/assets/images/motorola-slider-m.png"
            alt={motorola5GBattleProject.img6Description}
          />
        </div>
        <div id="apit-scene-7" className="apit-scene">
          <p className="p-1">{motorola5GBattleProject.paragraph7}</p>
          <p className="p-2">{motorola5GBattleProject.paragraph8}</p>
          <p className="p-3">
            <span>{motorola5GBattleProject.paragraph9}</span>
            <span role="img" aria-label="winking face with tongue">
            😜
            </span>
            <span>{motorola5GBattleProject.paragraph10}</span>
          </p>
          <Button
            buttonText={motorola5GBattleProject.buttonText}
            buttonLink={motorola5GBattleProject.buttonLink}
            buttonType="secondary"
            buttonWidth="210px"
          />
        </div>
      </section>
    );
  }
}

export default Motorola5GBattle;
