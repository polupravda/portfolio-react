import React from "react";
import "../App.scss";

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
      ninjaAppear: "ninja-initial",
      skillsAnim: ""
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
    const triggerElement3 = document.getElementById("scene-3");

    const checkTriggerElements = () => {
      // distance from bottom/to top when the animation is supposed to start/end
      const triggerMargin = window.innerHeight / 5;
      // trigger element is 20 vh in viewport
      const triggerInAt = window.scrollY + window.innerHeight - triggerMargin;

      // bottom of the triggerElement1
      const triggerBottom1 =
        triggerElement1.offsetTop + triggerElement1.clientHeight;
      const trigger1IsHiddenEnough =
        window.scrollY > triggerBottom1 - triggerMargin;

      // bottom of the triggerElement2
      const triggerBottom2 =
        triggerElement2.offsetTop + triggerElement2.clientHeight;
      const trigger2IsShownEnough = triggerInAt > triggerElement2.offsetTop;
      const trigger2IsHiddenEnough =
        window.scrollY + triggerMargin <= triggerBottom2;
      const trigger2IsPassed = window.scrollY + triggerMargin > triggerBottom2;

      const triggerTop2 = triggerElement2.offsetTop;
      const triggerTop3 = triggerElement3.offsetTop;

      if (trigger1IsHiddenEnough) {
        this.setState({ foxPinned: "fox-unpinned" });
      } else {
        this.setState({ foxPinned: "fox-pinned" });
      }

      // when scene-2 reaches top of the screen, it gets pinned. 
      // Ninja of .pinned class gets its animation.
      // the top of the next scene triggers unpinning
      if(window.scrollY >= triggerTop2 && window.scrollY <= triggerTop3) {
        this.setState({ skillsAnim: "skills-pinned" });
      }

      // // animate ninja based on skills container as a trigger
      // if (trigger2IsShownEnough && trigger2IsHiddenEnough) {
      //   this.setState({ ninjaAppear: "ninja-appear" });
      // } else if (trigger2IsPassed) {
      //   this.setState({ ninjaAppear: "ninja-hide" });
      // } else {
      //   this.setState({ ninjaAppear: "ninja-initial" });
      // }

      // // pin skills and tools containers
      // if(window.scrollY >= triggerTop2 && window.scrollY < triggerTop3) {
      //   this.setState({ skillsAnim: "skills-pinned" })
      // }

      console.log(
        "appear: ",
        trigger2IsShownEnough,
        trigger2IsHiddenEnough,
        "hide: ",
        trigger2IsPassed
      );
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
          <div className={"scene " + this.state.skillsAnim} id="scene-2">
            <Skills />
            <Tools />
            <div className={this.state.ninjaAppear} id="ninja-anim-box">
              <Ninja />
            </div>
          </div>
          <div className={"scene " + this.state.historyAnim} id="scene-3">
            <History />
            <Bear />
          </div>
          <ProfHighlights content={profHighlights.y2018} />
          <ApMDemo />
          <ApDDemo />
          <ProfHighlights content={profHighlights.y2017} />
          <ProfHighlights content={profHighlights.y2016} />
          <ProfHighlights content={profHighlights.y2015} />
          <ProfHighlights content={profHighlights.y2014} />
          <ButtonPrimary buttonText="Learn more" />
          <ButtonSecondary buttonText="More info" />
          {/* <Github /> */}
        </section>
      </>
    );
  }
}

export default Home;
