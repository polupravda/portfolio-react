import React from "react";
import "../App.scss";
import { Controller, Scene } from "react-scrollmagic";

import Skills from "../components/Skills";
import Tools from "../components/Tools";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import Fox from "../components/Fox";
import Intro from "../components/Intro";
import Bear from "../components/Bear";
import Ninja from "../components/Ninja";
import History from "../components/History";
import Octopus from "../components/Octopus";
import ApMDemo from "../components/ApMDemo";
import ProfHighlights from "../components/ProfHighlights";
import ObVideo from "../components/ObVideo";
import APitTools from "../components/APitTools";
import { profHighlights } from "../Content";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introAnim: "hidden",
      foxPinned: "fox-pinned",
      ninja: "hidden",
      octopusAnim: "hidden",
      octopusLifeAnim: "",
      bear: "hidden",
      ob: "hidden"
    };
  }

  componentDidMount() {
    function debounce(func, wait = 20, immediate = true) {
      let timeout;
      return function() {
        const context = this,
          args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    // Animate scenes
    const triggerElement1 = document.getElementById("myIntro");

    const checkTriggerElements = () => {
      // distance from bottom/to top when the animation is supposed to start/end
      const triggerMargin = window.innerHeight / 5;

      // bottom of the triggerElement1
      const triggerBottom1 =
        triggerElement1.offsetTop + triggerElement1.clientHeight;
      const trigger1IsHiddenEnough =
        window.scrollY > triggerBottom1 - triggerMargin;

      if (trigger1IsHiddenEnough) {
        this.setState({ foxPinned: "fox-unpinned" });
      } else {
        this.setState({ foxPinned: "fox-pinned" });
      }

      // animated element loses .hidden once its sibling is in viewport
      const ninjaTrigger = document.getElementById("skills");
      const ninjaBeforeAnimationArea = ninjaTrigger.getBoundingClientRect().top;

      if (
        ninjaBeforeAnimationArea <= triggerMargin * 4 &&
        ninjaBeforeAnimationArea >= 0
      ) {
        this.setState({ ninja: "ninja-appear" });
      } else if (ninjaBeforeAnimationArea < 0) {
        this.setState({ ninja: "ninja-hide" });
      } else {
        this.setState({ ninja: "hidden" });
      }

        // animation scene-3
        // animated element loses .hidden once its sibling is in viewport
        const octopusTrigger = document.getElementById("history");
        const octopusBeforeAnimationArea = octopusTrigger.getBoundingClientRect()
            .top;

        if (
            octopusBeforeAnimationArea <= triggerMargin * 4 &&
            octopusBeforeAnimationArea >= 0
        ) {
            this.setState({ octopusAnim: "octopus-fall" });
            this.setState({ octopusLifeAnim: "octopus-birth-anim" });
        } else if (octopusBeforeAnimationArea < 0) {
            this.setState({ octopusAnim: "octopus-hide" });
            this.setState({ octopusLifeAnim: "octopus-fly-away-anim" });
        } else {
            this.setState({ octopusAnim: "hidden" });
            this.setState({ octopusLifeAnim: "hidden" });
        }


        // animation scene-5
        const obTrigger = document.getElementById("2017");
        const obBeforeAnimationArea = obTrigger.getBoundingClientRect().top;
        if (
            obBeforeAnimationArea <= triggerMargin * 4 &&
            obBeforeAnimationArea >= 0
        ) {
            this.setState({ ob: "ob-appear" });
        } else if (obBeforeAnimationArea < 0) {
            this.setState({ ob: "ob-hide" });
        } else {
            this.setState({ ob: "hidden" });
        }

        // animation scene-6
        // animated element loses .hidden once its sibling is in viewport
        const bearTrigger = document.getElementById("2016");
        const bearBeforeAnimationArea = bearTrigger.getBoundingClientRect().top;
        if (
            bearBeforeAnimationArea <= triggerMargin * 4 &&
            bearBeforeAnimationArea >= 0
        ) {
            this.setState({ bear: "bear-appear" });
        } else if (bearBeforeAnimationArea < 0) {
            this.setState({ bear: "bear-hide" });
        } else {
            this.setState({ bear: "hidden" });
        }
    };

    window.addEventListener("scroll", debounce(checkTriggerElements));

    // Animate the first Scene after loading
    setTimeout(() => {
      this.setState({ introAnim: "intro-anim" });
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.special);
  }
  render() {
    return (
      <>
        <section>
          <div className={"scene " + this.state.introAnim} id="scene-1">
            <Intro />
            <div className={this.state.foxPinned} id="fox-anim-box">
              <Fox />
            </div>
          </div>
          <Controller>
            <Scene
              duration={800}
              pin={true}
              triggerHook={0}
              classToggle="parent-ninja"
            >
              <div className="scene" id="scene-2">
                <Skills />
                <Tools />
                <div className={this.state.ninja} id="ninja-anim-box">
                  <Ninja />
                </div>
              </div>
            </Scene>
            <Scene duration={800} pin={true} triggerHook={0}>
              <div className="scene" id="scene-3">
                <History />
                <div className={this.state.octopusAnim} id="octopus-anim-box">
                  <Octopus octopusLifeAnim={this.state.octopusLifeAnim} />
                </div>
              </div>
            </Scene>
            <Scene duration={800} pin={true} triggerHook={0}>
              <div className="scene" id="scene-4">
                <ProfHighlights content={profHighlights.y2018} />
                <ApMDemo />
                <div id="androidpit-button-container">
                  <APitTools />
                  <ButtonSecondary
                    buttonText="Visit Web Site"
                    buttonLink="https://www.androidpit.de/"
                    buttonWidth="70px"
                  />
                </div>
              </div>
            </Scene>
            <Scene duration={800} pin={true} triggerHook={0}>
              <div className="scene" id="scene-5">
                <ProfHighlights content={profHighlights.y2017} />
                <div className={this.state.ob} id="ob-anim-box">
                  <ObVideo />
                </div>
              </div>
            </Scene>
            <Scene duration={800} pin={true} triggerHook={0}>
              <div className="scene" id="scene-6">
                <ProfHighlights content={profHighlights.y2016} />
                <div className={this.state.bear} id="bear-anim-box">
                  <Bear />
                </div>
              </div>
            </Scene>
            <Scene duration={800} pin={true} triggerHook={0}>
              <div className="scene" id="scene-7">
                <ProfHighlights content={profHighlights.y2015} />
              </div>
            </Scene>
            <Scene duration={800} pin={true} triggerHook={0}>
              <div className="scene" id="scene-8">
                <ProfHighlights content={profHighlights.y2014} />
                <ButtonPrimary buttonText="Learn more" />
                <ButtonSecondary buttonText="More info" />
              </div>
            </Scene>
          </Controller>
        </section>
      </>
    );
  }
}

export default Home;
