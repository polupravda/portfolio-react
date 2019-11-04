import React from "react";
import "../App.scss";
import { Controller, Scene } from "react-scrollmagic";

import Skills from "../components/Skills";
import Tools from "../components/Tools";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import Fox from "../components/Fox";
// import Github from "../components/Github";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Bear from "../components/Bear";
import Ninja from "../components/Ninja";
import History from "../components/History";
import Octopus from "../components/Octopus";
import ApMDemo from "../components/ApMDemo";
// import ApDDemo from "../components/ApDDemo";
import OldDesktop from "../components/OldDesktop";
import AppleDesktop from "../components/AppleDesktop";
import ProfHighlights from "../components/ProfHighlights";
import { profHighlights } from "../Content";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introAnim: "hidden",
      foxPinned: "fox-pinned",
      ninja: "hidden",
      octopusAnim: "hidden",
      octopusLifeAnim: ""
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

      console.log("jaja");
    };

    window.addEventListener("scroll", debounce(checkTriggerElements));

    // Animate the first Scene after loading
    setTimeout(() => {
      this.setState({ introAnim: "intro-anim" });
    }, 1000);
  }

  render() {
    return (
      <>
        <header className="App-header">
          <div id="navbar-container">
            <NavBar />
          </div>
        </header>
        <section id="main">
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
                {/* <ApDDemo /> */}
                <OldDesktop />
                <AppleDesktop />
              </div>
            </Scene>
            <Scene duration={800} pin={true} triggerHook={0}>
              <div className="scene" id="scene-5">
                <ProfHighlights content={profHighlights.y2017} />
              </div>
            </Scene>
            <Scene duration={800} pin={true} triggerHook={0}>
              <div className="scene" id="scene-6">
                <ProfHighlights content={profHighlights.y2016} />
                <Bear />
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
            {/* <Github /> */}
          </Controller>
        </section>
      </>
    );
  }
}

export default Home;
