import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { finalWords, myContactDetails } from "../Content";
import Thanks from "./Thanks";
import Button from "./Button";

function FinalWords() {
  return (
    <div id="final-words">
      <Thanks />
      <span id="thanks-paragraph">{finalWords.paragraph0}</span>
      <div id="final-words-works-container">
        <span>{finalWords.paragraph1}</span>
        <Link to="/works" className="contact-data">
          {finalWords.works}
        </Link>
      </div>
      <div id="final-words-github-container">
        <span>{finalWords.paragraph2}</span>
        <a
          href={myContactDetails.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-data"
          id="linkedin-link"
        >
          {finalWords.github}
        </a>
      </div>
      <div id="cv-container">
        <span>{finalWords.paragraph3}</span>
        <Button
          buttonLink="https://drive.google.com/file/d/1-Q38MUypDisnEO3a0OFSY0TVk4dRO6lx/view?usp=sharing"
          buttonText={finalWords.buttonCV}
          buttonType="primary"
          download="Elena-Volovicheva-CV.pdf"
          target="_blank"
          title="Download CV"
        ></Button>
      </div>
    </div>
  );
}

export default FinalWords;
