import React, { Component } from "react";
import "./css/App.css";
import Upload from "./components/uploadArea/upload";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Upload />
      </div>
    );
  }
}

export default App;
