import React, { Component } from "react";
import UploadZone from "./uploadZone";
import "./upload.css";

class Upload extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <UploadZone />
      </React.Fragment>
    );
  }
}

export default Upload;
