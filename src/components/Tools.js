import React from "react";
import "../App.scss";
import { toolsList } from "../Content";

function Tools() {
  return (
    <div id="tools">
      <h2>{toolsList.title}</h2>
      <div className="tools-items-container">
        {toolsList.items.map(item => (
          <div className="i-container" key={item}>
            {item.map(i => (
              <span key={i}>{i}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
