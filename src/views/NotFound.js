import React from "react";
import "../App.scss";
import Stone404 from "../components/Stone404";
import Button from "../components/Button";
import Code404 from "../components/Code404";
import { notFound } from "../Content.js";

class NotFound extends React.Component {
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
      <section id="not-found" className={this.state.introAnim}>
        <Code404 />
        <span className="error-message">{notFound.errorMessage}</span>
        <div id="stone-shadow"></div>
        <Stone404 />
        <Button
          buttonText={notFound.buttonText}
          buttonLink="/"
          buttonType="secondary"
          buttonWidth="210px"
        />
      </section>
    );
  }
}

export default NotFound;
