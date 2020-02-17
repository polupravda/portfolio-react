import React from "react";
import "../App.scss";
import ImagesLoaded from "react-images-loaded";

import Router from "./Router";
import Spinner from "./Spinner";
// import Background from "./Background";

class ImageLoadController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoading: true
    };
  }

  handleOnAlways = instance => {
    console.log("handleOnAlways");
  };

  handleOnProgress = (instance, image) => {
    this.setState({ imagesLoading: true });
  };

  handleOnFail = instance => {
    console.log("handleOnFail");
  };

  handleDone = instance => {
    this.setState({ imagesLoading: false });
  };

  render() {
    return (
      <ImagesLoaded
        elementType={"div"} // defaults to 'div'
        className={"images-loaded-container"} // defaults to 'images-loaded-container'
        onAlways={this.handleOnAlways}
        onProgress={this.handleOnProgress}
        onFail={this.handleOnFail}
        done={this.handleDone}
        background=".image" // true or child selector
      >
        {this.state.imagesLoading ? <Spinner /> : <Router />}
      </ImagesLoaded>
    );
  }
}

export default ImageLoadController;
