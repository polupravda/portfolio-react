import React from "react";
import "../App.scss";
import { skillsList } from "../Content";

function Skills() {
  return (
    <div id="skills">
      <h2>{skillsList.title}</h2>
      <div className="i-container">
        {skillsList.items.map(item => (
          <span>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
