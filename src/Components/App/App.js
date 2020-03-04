import React, { Component } from "react";
import "./App.css";
import Domino from "../Domino/Domino";
import DominoDetails from "../DominoDetails/DominoDetails";
import QuoteDetails from "../QuoteDetails/QuoteDetails";
import DominoSettings from "../DominoSettings/DominoSettings";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  onMouseOverHandler = card => {
    this.setState({ selected: card });
  };

  render() {
    const dominos = [];
    for (let i = 0; i < 24; i++) {
      dominos.push(
        <Domino key={i} hour={i} onMouseOverHandler={this.onMouseOverHandler} />
      );
    }

    return (
      <div className="app">
        <div className="dominoContainer">{dominos}</div>
        <div className="detailsContainer">
          <DominoDetails />
          <div className="verticalContainer">
            <QuoteDetails />
            <DominoSettings />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
