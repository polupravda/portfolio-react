import React from "react";
import "../App.scss";

class ObVideo extends React.Component {
  render() {
    return (
      <div id="ob-video-container">
        <div id="tv-shadow"></div>
        <video autoPlay muted loop controls id="ob-video">
          <source src="/assets/videos/ob-video.mp4" type="video/mp4" />
        </video>
        <div className="screen-canvas tv-canvas">
          <img src="/assets/images/tv.png" alt="old tv demo" id="old-tv" />
        </div>
      </div>
    );
  }
}

export default ObVideo;
