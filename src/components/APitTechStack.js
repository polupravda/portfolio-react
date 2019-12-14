import React from "react";
import "../App.scss";
import { aPitTechStack } from "../Content";

function APitTechStack() {
  return (
    <div id="apit-tech-stack">
      <h2>{aPitTechStack.title}</h2>
      <div id="tech-stack-names-container">
        {aPitTechStack.techStackItems.map(item => (
          <span>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default APitTechStack;
