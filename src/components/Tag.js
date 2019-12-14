import React from "react";
import "../App.scss";
import ArrowFat from "./ArrowFat";

class Tag extends React.Component {
  render() {
    return (
      <div class="tag-container">
        <ArrowFat />
        <div class="tag-text">{this.props.tagText}</div>
      </div>
    );
  }
}

export default Tag;
