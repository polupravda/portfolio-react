import React from "react";
import "../App.scss";
import { Controller, Scene } from 'react-scrollmagic';

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
import ApMDemo from "../components/ApMDemo";
import ApDDemo from "../components/ApDDemo";
import ProfHighlights from "../components/ProfHighlights";
import { profHighlights } from "../Content";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introAnim: "hidden",
      foxPinned: "fox-pinned",
      ninjaHidden: "hidden",
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
    const triggerElement2 = document.getElementById("scene-2");

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

      const animHiddenBeforeThisAppears = document.getElementById("skills");
      const beforeAnimationArea = animHiddenBeforeThisAppears.getBoundingClientRect().top;

      if(beforeAnimationArea <= triggerMargin) {
        this.setState({ ninjaHidden: "" });
      }

      // if(trigger2NotAppearedYet) {
      //   this.setState({ ninjaAppear: "" });
      // } else if (trigger2Appeared && trigger2NotDisappearedYet) {
      //   this.setState({ ninjaAppear: "ninja-appear" });
      // } else {
      //   this.setState({ ninjaAppear: "ninja-hide" });
      // } 

      console.log(beforeAnimationArea);
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
          <Scene duration={800} pin={true} triggerHook={0} classToggle="parent-ninja">
          <div className="scene" id="scene-2">
            <Skills />
            <Tools />
            <div className={this.state.ninjaHidden} id="ninja-anim-box">
              <Ninja />
            </div>
          </div>
          </Scene>
          <Scene duration={800} pin={true} triggerHook={0}>
          <div className="scene" id="scene-3">
            <History />
            <Bear />
          </div>
          </Scene>
          <div className="scene" id="scene-3">
          <ProfHighlights content={profHighlights.y2018} />
          <ApMDemo />
          <ApDDemo />
          </div>
          <ProfHighlights content={profHighlights.y2017} />
          <ProfHighlights content={profHighlights.y2016} />
          <ProfHighlights content={profHighlights.y2015} />
          <ProfHighlights content={profHighlights.y2014} />
          <ButtonPrimary buttonText="Learn more" />
          <ButtonSecondary buttonText="More info" />
          {/* <Github /> */}
          </Controller>
        </section>
      </>
    );
  }
}

export default Home;
