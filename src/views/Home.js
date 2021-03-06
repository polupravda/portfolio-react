import React from "react";
import "../App.scss";
import ImagesLoaded from 'react-images-loaded';

import Spinner from "../components/Spinner";
import Skills from "../components/Skills";
import PointerScroll from "../components/PointerScroll";
import Tools from "../components/Tools";
import Button from "../components/Button";
import Fox from "../components/Fox";
import Intro from "../components/Intro";
import Bear from "../components/Bear";
import Ninja from "../components/Ninja";
import History from "../components/History";
import Octopus from "../components/Octopus";
import ApMDemo from "../components/ApMDemo";
import Theatre from "../components/Theatre";
import ProfHighlights from "../components/ProfHighlights";
import ObVideo from "../components/ObVideo";
import Trolleybus from "../components/Trolleybus";
import Lenin from "../components/Lenin";
import Blackboard from "../components/Blackboard";
import Teacher from "../components/Teacher";
import Students from "../components/Students";
import Goat from "../components/Goat";
import FinalWords from "../components/FinalWords";

import { profHighlights } from "../Content";
import { debounce, isMobileDevice } from "../helperFunctions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoadingState: "progress",
      introAnim: "hidden",
      foxPinned: "fox-pinned",
      pointerScroll: "hidden",
      ninja: "hidden",
      octopusAnim: "hidden",
      octopusLifeAnim: "hidden",
      theatre: "hidden",
      demo: "hidden",
      bear: "hidden",
      ob: "hidden",
      trolleybus: "hidden",
      lenin: "hidden",
      teacher: "hidden",
      students: "hidden",
      blackboard: "hidden",
      goat: "hidden",
      snapped: "",
      scrollBackwards: false
    };
    this.debouncedScrollListener = debounce(this.checkTriggerElements);
    this.debouncedScrollDirectionListener = debounce(this.checkScrollDirection);
    this.scrollPos = 0;
  };

  handleOnAlways = instance => {console.log("handleOnAlways")};
 
  handleOnProgress = (instance, image) => {this.setState({imagesLoadingState: "progress"})};
 
  handleOnFail = instance => {console.log(instance)};
 
  handleDone = instance => {this.setState({imagesLoadingState: "done", introAnim: "intro-anim"})};

  checkScrollDirection = () => {
    if (document.body.getBoundingClientRect().top > this.scrollPos) {
      this.setState({ scrollBackwards: true });
      this.scrollPos = document.body.getBoundingClientRect().top;
    } else {
      this.setState({ scrollBackwards: false });
      this.scrollPos = document.body.getBoundingClientRect().top;
    }
  };

  relationToView = el => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const triggerMargin = window.innerHeight / 5;

    if (
      elemTop <= window.innerHeight - triggerMargin &&
      elemBottom > triggerMargin
    ) {
      return "isPartiallyVisible";
    } else if (elemTop < triggerMargin && elemBottom <= triggerMargin) {
      return "isPartiallyHidden";
    } else if (
      elemTop > window.innerHeight - triggerMargin &&
      elemTop <= window.innerHeight + triggerMargin
    ) {
      return "isConditionForBackScrollHide";
    } else {
      return "isHidden";
    }
  };

  // The 1st and the last scenes has different conditions to display animation
  relationToView1stScene = el => {
    const triggerMargin = window.innerHeight / 5;
    const elemBottom = el && el.offsetTop + el.clientHeight;

    if (window.scrollY > elemBottom - triggerMargin) {
      return "isVisible";
    } else {
      return "isPartiallyHidden";
    }
  };

  checkTriggerElements = () => {
    const introTrigger = document.getElementById("my-intro");
    const ninjaTrigger = document.getElementById("description-container");
    const octopusTrigger = document.getElementById("history");
    const demoTrigger = document.getElementById("2018");
    const theatreTrigger = document.getElementById("theatre-description");
    const obTrigger = document.getElementById("2017");
    const bearTrigger = document.getElementById("2016");
    const trolleybusTrigger = document.getElementById("2015");
    const teacherTrigger = document.getElementById("2014");
    const goatTrigger = document.getElementById("thanks");

    const introPos = this.relationToView1stScene(introTrigger);
    const ninjaPos = this.relationToView(ninjaTrigger);
    const octopusPos = this.relationToView(octopusTrigger);
    const demoPos = this.relationToView(demoTrigger);
    const theatrePos = this.relationToView(theatreTrigger);
    const obPos = this.relationToView(obTrigger);
    const bearPos = this.relationToView(bearTrigger);
    const trolleybusPos = this.relationToView(trolleybusTrigger);
    const teacherPos = this.relationToView(teacherTrigger);
    const goatPos = this.relationToView(goatTrigger);

    switch (introPos) {
      case "isVisible":
        this.setState({ foxPinned: "fox-unpinned" });
        this.setState({ pointerScroll: "pointer-hide" });
        break;
      default:
        this.setState({ foxPinned: "fox-pinned" });
        break;
    }

    switch (ninjaPos) {
      case "isPartiallyVisible":
        if (!this.state.scrollBackwards) {
          this.setState({ snapped: "snapped" });
        }
        this.setState({ ninja: "ninja-appear" });
        break;
      case "isPartiallyHidden":
        this.setState({ snapped: "" });
        this.setState({ ninja: "ninja-hide" });
        break;
      case "isConditionForBackScrollHide":
        if (this.state.scrollBackwards) {
          this.setState({ ninja: "ninja-hide" });
          break;
        } else {
          this.setState({ ninja: "hidden" });
          break;
        }
      default:
        this.setState({ ninja: "hidden" });
        break;
    }

    switch (octopusPos) {
      case "isPartiallyVisible":
        this.setState({ octopusAnim: "octopus-fall" });
        this.setState({ octopusLifeAnim: "octopus-birth-anim" });
        break;
      case "isPartiallyHidden":
        this.setState({ octopusAnim: "octopus-hide" });
        this.setState({ octopusLifeAnim: "octopus-fly-away-anim" });
        break;
      case "isConditionForBackScrollHide":
        if (this.state.scrollBackwards) {
          this.setState({ octopusAnim: "octopus-hide" });
          this.setState({ octopusLifeAnim: "octopus-fly-away-anim" });
          break;
        } else {
          this.setState({ octopusAnim: "hidden" });
          this.setState({ octopusLifeAnim: "hidden" });
          break;
        }
      default:
        this.setState({ octopusAnim: "hidden" });
        this.setState({ octopusLifeAnim: "hidden" });
        break;
    }

    switch (demoPos) {
      case "isPartiallyVisible":
        this.setState({ demo: "demo-appear" });
        break;
      case "isPartiallyHidden":
        this.setState({ demo: "demo-hide" });
        break;
      case "isConditionForBackScrollHide":
        if (this.state.scrollBackwards) {
          this.setState({ demo: "demo-hide" });
          break;
        } else {
          this.setState({ demo: "hidden" });
          break;
        }
      default:
        this.setState({ demo: "hidden" });
        break;
    }

    switch (theatrePos) {
      case "isPartiallyVisible":
        this.setState({ theatre: "theatre-appear" });
        break;
      case "isPartiallyHidden":
        this.setState({ theatre: "theatre-hide" });
        break;
      case "isConditionForBackScrollHide":
        if (this.state.scrollBackwards) {
          this.setState({ theatre: "theatre-hide" });
          break;
        } else {
          this.setState({ theatre: "hidden" });
          break;
        }
      default:
        this.setState({ theatre: "hidden" });
        break;
    }

    switch (obPos) {
      case "isPartiallyVisible":
        this.setState({ ob: "ob-appear" });
        break;
      case "isPartiallyHidden":
        this.setState({ ob: "ob-hide" });
        break;
      case "isConditionForBackScrollHide":
        if (this.state.scrollBackwards) {
          this.setState({ ob: "ob-hide" });
          break;
        } else {
          this.setState({ ob: "hidden" });
          break;
        }
      default:
        this.setState({ ob: "hidden" });
        break;
    }

    switch (bearPos) {
      case "isPartiallyVisible":
        this.setState({ bear: "bear-appear" });
        break;
      case "isPartiallyHidden":
        this.setState({ bear: "bear-hide" });
        break;
      case "isConditionForBackScrollHide":
        if (this.state.scrollBackwards) {
          this.setState({ bear: "bear-hide" });
          break;
        } else {
          this.setState({ bear: "hidden" });
          break;
        }
      default:
        this.setState({ bear: "hidden" });
        break;
    }

    switch (trolleybusPos) {
      case "isPartiallyVisible":
        this.setState({ trolleybus: "trolleybus-appear" });
        this.setState({ lenin: "lenin-appear" });
        break;
      case "isPartiallyHidden":
        this.setState({ trolleybus: "trolleybus-hide" });
        this.setState({ lenin: "lenin-hide" });
        break;
      case "isConditionForBackScrollHide":
        if (this.state.scrollBackwards) {
          this.setState({ trolleybus: "trolleybus-hide" });
          this.setState({ lenin: "lenin-hide" });
          break;
        } else {
          this.setState({ trolleybus: "hidden" });
          this.setState({ lenin: "hidden" });
          break;
        }
      default:
        this.setState({ trolleybus: "hidden" });
        this.setState({ lenin: "hidden" });
        break;
    }

    switch (teacherPos) {
      case "isPartiallyVisible":
        this.setState({ blackboard: "blackboard-appear" });
        this.setState({ teacher: "teacher-appear" });
        this.setState({ students: "students-appear" });
        break;
      case "isPartiallyHidden":
        this.setState({ blackboard: "blackboard-hide" });
        this.setState({ teacher: "teacher-hide" });
        this.setState({ students: "students-hide" });
        break;
      case "isConditionForBackScrollHide":
        if (this.state.scrollBackwards) {
          this.setState({ blackboard: "blackboard-hide" });
          this.setState({ teacher: "teacher-hide" });
          this.setState({ students: "students-hide" });
          break;
        } else {
          this.setState({ blackboard: "hidden" });
          this.setState({ teacher: "hidden" });
          this.setState({ students: "hidden" });
          break;
        }
      default:
        this.setState({ blackboard: "hidden" });
        this.setState({ teacher: "hidden" });
        this.setState({ students: "hidden" });
        break;
    }

    switch (goatPos) {
      case "isPartiallyVisible":
        this.setState({ goat: "goat-appear" });
        break;
      case "isConditionForBackScrollHide":
        if (this.state.scrollBackwards && this.state.goat === "goat-appear") {
          this.setState({ goat: "goat-hide" });
          break;
        } else {
          this.setState({ goat: "hidden" });
          break;
        }
      default:
        this.setState({ goat: "hidden" });
        break;
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.debouncedScrollListener);
    window.addEventListener("scroll", this.debouncedScrollDirectionListener);

    // Animate scroll hint
    setTimeout(() => {
      this.setState({ pointerScroll: "pointer-appear" });
    }, 2000);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.debouncedScrollListener);
    window.removeEventListener("scroll", this.debouncedScrollDirectionListener);
  }

  render() {
    return (
      <>
      <ImagesLoaded
        elementType={'div'} // defaults to 'div'
        className={'images-loaded-container'} // defaults to 'images-loaded-container'
        onAlways={this.handleOnAlways}
        onProgress={this.handleOnProgress}
        onFail={this.handleOnFail}
        done={this.handleDone}
        background=".image"
      >
        <section id="wrapper" className="images-loaded-container">
          <Spinner spinnerClass={this.state.imagesLoadingState} />
          <div className={"scene " + this.state.introAnim} id="scene-1">
            <Intro />
            <div className={this.state.foxPinned} id="fox-anim-box">
              <Fox />
            </div>
            {isMobileDevice() ? (
              <div />
            ) : (
              <PointerScroll animClass={this.state.pointerScroll} />
            )}
          </div>
          <div className={"scene " + this.state.snapped} id="scene-2">
            <div id="description-container">
              <Skills />
              <Tools />
            </div>
            <div className={this.state.ninja} id="ninja-anim-box">
              <Ninja />
            </div>
          </div>
          <div className="scene" id="scene-3">
            <History />
            <div className={this.state.octopusAnim} id="octopus-anim-box">
              <Octopus octopusLifeAnim={this.state.octopusLifeAnim} />
            </div>
          </div>
          <div className="scene" id="scene-4">
            <ProfHighlights content={profHighlights.y2018} />
            <div className={this.state.demo} id="demo-anim-box">
              <ApMDemo />
            </div>
            <div id="androidpit-button-container">
              <Button
                buttonText="Visit Web Site"
                buttonLink="https://www.androidpit.de/"
                buttonType="secondary"
                buttonWidth="210px"
              />
            </div>
          </div>
          <div className="scene" id="scene-4-2">
            <div id="theatre-description">
              {profHighlights.y2018.highlightParagraphs2}
            </div>
            <div className={this.state.theatre} id="theatre-anim-box">
              <Theatre />
            </div>
          </div>
          <div className="scene" id="scene-5">
            <ProfHighlights content={profHighlights.y2017} />
            <div className={this.state.ob} id="ob-anim-box">
              <ObVideo />
            </div>
          </div>
          <div className="scene" id="scene-6">
            <ProfHighlights content={profHighlights.y2016} />
            <div className={this.state.bear} id="bear-anim-box">
              <Bear />
            </div>
          </div>
          <div className="scene" id="scene-7">
            <ProfHighlights content={profHighlights.y2015} />
            <div className={this.state.lenin} id="lenin-anim-box">
              <Lenin />
            </div>
            <div className={this.state.trolleybus} id="trolleybus-anim-box">
              <Trolleybus />
            </div>
          </div>
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
          <div className="scene" id="scene-9">
            <div className={this.state.goat} id="goat-anim-box">
              <Goat />
            </div>
            <FinalWords />
          </div>
        </section>
        </ImagesLoaded>
      </>
    );
  }
}

export default Home;
