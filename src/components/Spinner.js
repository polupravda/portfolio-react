import React from "react";
import "../App.scss";
import { spinnerText } from "../Content";
import Underline from "./Underline.js";
import EV from "./EV";

function Spinner({spinnerClass}) {
  return (
    <div id="spinner-container" className={spinnerClass}>
      <EV />
      <Underline />
      <div id="spinner-text">{spinnerText.loading}</div>
    </div>
  );
}

export default Spinner;
