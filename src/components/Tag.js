import React from "react";
import "../App.scss";
import ArrowFat from "./ArrowFat";

class Tag extends React.Component {
  render() {
    return (
      <div className="tag-container">
        <ArrowFat />
        <div className="tag-text">{this.props.tagText}</div>
      </div>
    );
  }
}

export default Tag;
