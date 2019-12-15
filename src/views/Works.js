import React from "react";
import "../App.scss";
import APit from "./APit";

class Works extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.debounce = this.debounce.bind(this);
  //   this.testConsole = this.testConsole.bind(this);
  // }

  // debounce(func, wait = 20, immediate = true) {
  //   let timeout;
  //   return function() {
  //     const context = this,
  //       args = arguments;
  //     const later = function() {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     const callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // }

  // testConsole() {
  //   console.log("Event Listener on scroll on Works page");
  // };

  // componentDidMount() {
  //   // console.log("Works did mount")
  //   window.addEventListener("scroll", this.debounce(this.testConsole));
  // }
  // componentWillUnmount() {
  //   // console.log("Works did unmount")
  //   window.removeEventListener("scroll", this.debounce(this.testConsole));
  // }
  render() {
    return (
      <APit/>
    );
  }
}

export default Works;
