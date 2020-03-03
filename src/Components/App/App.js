import React, { Component } from "react";
import "./App.css";
import Domino from "../Domino/Domino";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="dominoContainer">
        <Domino />
        <Domino />
        <Domino />
      </div>
    );
  }
}

export default App;
