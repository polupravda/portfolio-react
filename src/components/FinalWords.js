import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import { finalWords, myContactDetails } from "../Content";
import Thanks from "../components/Thanks";

function FinalWords() {
  return (
    <div id="final-words">
      <Thanks />
      <span id="thanks-paragraph">{finalWords.paragraph0}</span>
      <div id="final-words-works-container">
        <span>{finalWords.paragraph1}</span>
        <Link to="/works" className="contact-data" id="works">
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
    </div>
  );
}

export default FinalWords;
