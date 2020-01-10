import React from "react";
import "../App.scss";
import Year from "./Year";

function ProfHighlights({ content: { year, highlightParagraphs } }) {
  return (
    <div className="prof-highlights-container" id={year}>
      <Year year={year}/>
      <div className="i-container">
        <div>
          {highlightParagraphs.map(paragraph => {
            return <p key={paragraph}>{paragraph}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfHighlights;
