import React from "react";
import "../App.scss";
import { toolsList } from "../Content";

function Tools() {
  return (
    <div id="tools">
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

export default Tools;
