import React, { Component } from "react";
import ClassNames from "classnames";
import Dropzone from "react-dropzone";
import UploadedFiles from "./uploadedFiles";

class UploadZone extends Component {
  state = { selectedFiles: [], loaded: 0 };

  componentWillMount() {
    this.onDrop.bind(this);
  }

  onDrop(inputFiles) {
    var selectedFiles = this.state.selectedFiles;
    selectedFiles.push(...inputFiles);
    this.setState({ selectedFiles });
  }

  removeFile(index) {
    var selectedFiles = this.state.selectedFiles;
    selectedFiles.splice(index, 1);
    this.setState({ selectedFiles });
  }

  uploadFiles() {
    console.log(this.state.selectedFiles);
  }

  render() {
    return (
      <React.Fragment>
        <div className="dropArea">
          <div className="innerDrop dropBorder">
            <Dropzone onDrop={this.onDrop.bind(this)}>
              {({ getRootProps, getInputProps, isDragActive }) => {
                return (
                  <div
                    {...getRootProps()}
                    className={ClassNames("dropzone", {
                      "dropzone--isActive": isDragActive
                    })}
                  >
                    <input className="dropInput" {...getInputProps()} />
                    {isDragActive ? (
                      <div className="dropText">
                        <span>Drop files here...</span>
                      </div>
                    ) : (
                      <div className="dropText">
                        <span>
                          Drop files here, or click to select files to upload
                        </span>
                      </div>
                    )}
                  </div>
                );
              }}
            </Dropzone>
          </div>
        </div>
        <UploadedFiles
          selectedFiles={this.state.selectedFiles}
          remove={this.removeFile.bind(this)}
        />
        <div onClick={this.uploadFiles.bind(this)} className="uploadBtn">
          <span>Upload</span>
        </div>
      </React.Fragment>
    );
  }
}

export default UploadZone;
