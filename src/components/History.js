import React from "react";
import "../App.scss";
import { history } from "../Content.js";

function History() {
  return (
    <div className="history-container">
      <h2>{history.historyHeading}</h2>
      <div className="i-container">
        <span>{history.historyP1}</span>
        <span>{history.historyP2}</span>
      </div>
    </div>
  );
}

export default History;
