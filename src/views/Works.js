import React from "react";
import "../App.scss";
import APit from "./APit";

class Works extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <APit />;
  }
}

export default Works;
