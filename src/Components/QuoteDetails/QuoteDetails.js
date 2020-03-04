import React, { Component } from "react";
import "./QuoteDetails.css";

class QuoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="quoteDetails">
        <p>I am a motivational quote!</p>
      </div>
    );
  }
}

export default QuoteDetails;
