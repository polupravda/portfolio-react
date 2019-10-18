import React from "react";
import "../App.scss";
import { skillsList, toolsList } from "../Content.js";

function Skills() {
  return (
    <div className="skills-container">
      <h2>{skillsList.title}</h2>
      <div className="i-container">
        {skillsList.items.map(item => (
          <span>{item}</span>
        ))}
      </div>
      <h2>{toolsList.title}</h2>
      <div className="tools-items-container">
        {toolsList.items.map(item => (
          <div className="i-container">
            {item.map(i => (
              <span>{i}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
