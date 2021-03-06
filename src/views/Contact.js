import React from "react";
import "../App.scss";
import { isMobileDevice } from "../helperFunctions";
import { contact, myContactDetails } from "../Content";
import Coffee from "../components/Coffee";

class Contact extends React.Component {
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
      <section id="contact" className={this.state.introAnim}>
        <Coffee />
        <span id="contact-me">{contact.contactMe}</span>
        <div id="contact-intro-container">
          <span>{contact.intro1}</span>
          <span className="contact-data" id="berlin">
            {contact.berlin}
          </span>
          <span>{contact.intro2}</span>
          {isMobileDevice() ? <br /> : ""}
          <a
            href="mailto:elena.volovicheva@gmail.com"
            target="_top"
            className="contact-data"
            id="contact-email"
          >
            {myContactDetails.email}
          </a>
        </div>
        <div id="contact-phone-container">
          <span className="intro-text" id="contact-intro-text-3">
            {contact.intro3}
          </span>
          <span className="contact-data" id="contact-phone">
            {myContactDetails.phone}
          </span>
        </div>
        <div id="contact-linkedin-container">
          <span className="intro-text" id="contact-intro-text-4">
            {contact.intro4}
          </span>
          <a
            href={myContactDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-data"
            id="linkedin-link"
          >
            {contact.linkedin}
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
