import React from "react";
import "../App.scss";
import { history } from "../Content.js";

function History() {
  return (
    <div id="history">
      <h2>{history.historyHeading}</h2>
      <div className="i-container">
        <p>{history.historyP1}</p>
        <p>{history.historyP2}</p>
      </div>
    </div>
  );
}

export default History;
