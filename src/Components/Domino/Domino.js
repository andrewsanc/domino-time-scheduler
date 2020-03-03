import React, { Component } from 'react';
import './Domino.css';

class Domino extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="domino">
        <h4 className="title">Card </h4>
      </div>
    );
  }
}

export default Domino;