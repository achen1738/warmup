import React, { Component } from "react";

class UploadedFiles extends Component {
  state = {};

  removeFile(e) {
    this.props.remove(e.currentTarget.getAttribute("index"));
  }

  createFiles() {
    var counter = -1;
    return this.props.selectedFiles.map(file => {
      counter += 1;
      return (
        <div key={counter} className="selectedFile">
          <span>{file.name}</span>
          <div
            onClick={e => this.removeFile(e)}
            index={counter}
            className="close"
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="listLocation">
        <div
          className="selectedList"
          style={
            this.props.selectedFiles.length !== 0
              ? { padding: "14px 19px 19px" }
              : {}
          }
        >
          {this.createFiles()}
        </div>
      </div>
    );
  }
}

export default UploadedFiles;
