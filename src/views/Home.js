import React from "react";
import "../App.scss";
import { Controller, Scene } from "react-scrollmagic";

import Skills from "../components/Skills";
import Tools from "../components/Tools";
import Button from "../components/Button";
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
import Trolleybus from "../components/Trolleybus";
import Lenin from "../components/Lenin";
import Blackboard from "../components/Blackboard";
import Teacher from "../components/Teacher";
import Students from "../components/Students";
import Goat from "../components/Goat";
import FinalWords from "../components/FinalWords";

import { profHighlights } from "../Content";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introAnim: "hidden",
      foxPinned: "fox-pinned",
      ninja: "hidden",
      octopusAnim: "hidden",
      octopusLifeAnim: "hidden",
      demo: "hidden",
      bear: "hidden",
      ob: "hidden",
      trolleybus: "hidden",
      lenin: "hidden",
      teacher: "hidden",
      students: "hidden",
      blackboard: "hidden",
      goat: ""
    };
    this.debouncedScrollListener = this.debounce(this.checkTriggerElements);
  }

  debounce = (func, wait = 20, immediate = true) => {
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
  };

  checkTriggerElements = () => {
    // Animate scenes
    const triggerElement1 = document.getElementById("myIntro");

    // distance from bottom/to top when the animation is supposed to start/end
    const triggerMargin = window.innerHeight / 5;

    // bottom of the triggerElement1
    const triggerBottom1 =
      triggerElement1 &&
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
    const ninjaBeforeAnimationArea =
      ninjaTrigger && ninjaTrigger.getBoundingClientRect().top;

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
    const octopusBeforeAnimationArea =
      octopusTrigger && octopusTrigger.getBoundingClientRect().top;

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

    // animation scene-4
    const demoTrigger = document.getElementById("2018");
    const demoBeforeAnimationArea =
      demoTrigger && demoTrigger.getBoundingClientRect().top;
    if (
      demoBeforeAnimationArea <= triggerMargin * 4 &&
      demoBeforeAnimationArea >= 0
    ) {
      this.setState({ demo: "demo-appear" });
    } else if (demoBeforeAnimationArea < 0) {
      this.setState({ demo: "demo-hide" });
    } else {
      this.setState({ demo: "hidden" });
    }

    // animation scene-5
    const obTrigger = document.getElementById("2017");
    const obBeforeAnimationArea =
      obTrigger && obTrigger.getBoundingClientRect().top;
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
    const bearTrigger = document.getElementById("2016");
    const bearBeforeAnimationArea =
      bearTrigger && bearTrigger.getBoundingClientRect().top;
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

    // animation scene-7
    const trolleybusTrigger = document.getElementById("2015");
    const trolleybusBeforeAnimationArea =
      trolleybusTrigger && trolleybusTrigger.getBoundingClientRect().top;
    if (
      trolleybusBeforeAnimationArea <= triggerMargin * 4 &&
      trolleybusBeforeAnimationArea >= 0
    ) {
      this.setState({ trolleybus: "trolleybus-appear" });
      this.setState({ lenin: "lenin-appear" });
    } else if (trolleybusBeforeAnimationArea < 0) {
      this.setState({ trolleybus: "trolleybus-hide" });
      this.setState({ lenin: "lenin-hide" });
    } else {
      this.setState({ trolleybus: "hidden" });
      this.setState({ lenin: "hidden" });
    }

    // animation scene-8
    const teacherTrigger = document.getElementById("2014");
    const teacherBeforeAnimationArea =
      teacherTrigger && teacherTrigger.getBoundingClientRect().top;
    if (
      teacherBeforeAnimationArea <= triggerMargin * 4 &&
      teacherBeforeAnimationArea >= 0
    ) {
      this.setState({ blackboard: "blackboard-appear" });
      this.setState({ teacher: "teacher-appear" });
      this.setState({ students: "students-appear" });
    } else if (teacherBeforeAnimationArea < 0) {
      this.setState({ blackboard: "blackboard-hide" });
      this.setState({ teacher: "teacher-hide" });
      this.setState({ students: "students-hide" });
    } else {
      this.setState({ blackboard: "hidden" });
      this.setState({ teacher: "hidden" });
      this.setState({ students: "hidden" });
    }

    // animation scene-9
    const goatTrigger = document.getElementById("thanks");
    const goatBeforeAnimationArea =
      goatTrigger && goatTrigger.getBoundingClientRect().top;
    if (
      goatBeforeAnimationArea <= triggerMargin * 4 &&
      goatBeforeAnimationArea >= 0
    ) {
      this.setState({ goat: "goat-appear" });
    } else if (goatBeforeAnimationArea < 0) {
      this.setState({ goat: "goat-hide" });
    } else {
      this.setState({ goat: "hidden" });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.debouncedScrollListener);

    // Animate the first Scene after loading
    setTimeout(() => {
      this.setState({ introAnim: "intro-anim" });
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.debouncedScrollListener);
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
              duration={500}
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
            <Scene duration={500} pin={true} triggerHook={0}>
              <div className="scene" id="scene-3">
                <History />
                <div className={this.state.octopusAnim} id="octopus-anim-box">
                  <Octopus octopusLifeAnim={this.state.octopusLifeAnim} />
                </div>
              </div>
            </Scene>
            <Scene duration={500} pin={true} triggerHook={0}>
              <div className="scene" id="scene-4">
                <ProfHighlights content={profHighlights.y2018} />
                <div className={this.state.demo} id="demo-anim-box">
                  <ApMDemo />
                </div>
                <div id="androidpit-button-container">
                  <APitTools />
                  <Button
                    buttonText="Visit Web Site"
                    buttonLink="https://www.androidpit.de/"
                    buttonType="secondary"
                    buttonWidth="210px"
                  />
                </div>
              </div>
            </Scene>
            <Scene duration={500} pin={true} triggerHook={0}>
              <div className="scene" id="scene-5">
                <ProfHighlights content={profHighlights.y2017} />
                <div className={this.state.ob} id="ob-anim-box">
                  <ObVideo />
                </div>
              </div>
            </Scene>
            <Scene duration={500} pin={true} triggerHook={0}>
              <div className="scene" id="scene-6">
                <ProfHighlights content={profHighlights.y2016} />
                <div className={this.state.bear} id="bear-anim-box">
                  <Bear />
                </div>
              </div>
            </Scene>
            <Scene duration={500} pin={true} triggerHook={0}>
              <div className="scene" id="scene-7">
                <ProfHighlights content={profHighlights.y2015} />
                <div className={this.state.lenin} id="lenin-anim-box">
                  <Lenin />
                </div>
                <div className={this.state.trolleybus} id="trolleybus-anim-box">
                  <Trolleybus />
                </div>
              </div>
            </Scene>
            <Scene duration={500} pin={true} triggerHook={0}>
              <div className="scene" id="scene-8">
                <ProfHighlights content={profHighlights.y2014} />
                <div className={this.state.blackboard} id="blackboard-anim-box">
                  <Blackboard />
                </div>
                <div className={this.state.teacher} id="teacher-anim-box">
                  <Teacher />
                </div>
                <div className={this.state.students} id="students-anim-box">
                  <Students />
                </div>
              </div>
            </Scene>
            <div className="scene" id="scene-9">
              <div className={this.state.goat} id="goat-anim-box">
                <Goat />
              </div>
              <FinalWords />
            </div>
          </Controller>
        </section>
      </>
    );
  }
}

export default Home;
