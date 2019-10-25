import React from "react";
import "../App.scss";

function ProfHighlights({ content: { year, highlightParagraphs } }) {
  return (
    <div className="prof-highlights-container">
      <h3>{year}</h3>
      <div className="i-container">
        <div>
          {highlightParagraphs.map(paragraph => {
            return <p>{paragraph}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfHighlights;
