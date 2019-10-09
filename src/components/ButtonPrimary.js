import React from "react";
import "../App.scss";

class ButtonPrimary extends React.Component {
  render() {
    return (
      <div class="button-primary-container">
        <a href="#" alt="">
          <svg viewBox="0 0 134 39" width="100%">
            <path
              d="M80.56,37.71 C68.13,38.47 55.71,39.26 43.26,39.51 C36.73,39.64 30.19,39.62 23.66,39.36 C18.88,39.17 13.53,39.4 8.87,38.21 C0.55,36.09 0.52,23.96 1.34,17.11 C1.75,13.76 2.33,9.27 5.04,6.88 C7.1,5.06 11,5 12.79,5.15 C25.48,5.68 37.41,4.15 50,2.76 C64.13,1.2 78.37,0.8 92.57,1.08 C99.04,1.2 105.5,1.48 111.96,1.84 C116.27,2.09 122.45,1.37 126.47,3.13 C129.93,4.65 130.15,9.63 130.98,12.78 C132.22,17.49 134.27,22.57 134.65,27.43 C135.38,36.75 93.32,36.92 80.56,37.71 Z"
              id="Path"
            ></path>
          </svg>
          <span class="button-text">{this.props.buttonText}</span>
        </a>
      </div>
    );
  }
}

export default ButtonPrimary;
