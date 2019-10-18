import React from "react";
import "../App.scss";
import ArrowFat from "./ArrowFat";

class Tag extends React.Component {
  render() {
    return (
      <div class="tag-container">
        <ArrowFat />
        <span class="tag-text">{this.props.tagText}</span>
      </div>
    );
  }
}

export default Tag;
