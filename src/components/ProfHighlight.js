import React from "react";
import "../App.scss";
import { profHighlights } from "../Content.js";

function profHighlight() {
  return (
    <div className="profHighlight-container">
      <h2>{profHighlights.year1}</h2>
      <div className="i-container">
        <span>{profHighlights.prof1}</span>
      </div>
    </div>
  );
}

export default profHighlight;
