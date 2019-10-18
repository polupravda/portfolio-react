import React from "react";
import "../App.scss";
import Tag from "./Tag";

function Rope({ tagText }) {
  return (
    <div id="rope-container">
      <img src="/assets/images/rope.png" alt="" className="rope" />
      <Tag tagText={tagText} />
    </div>
  );
}

export default Rope;
