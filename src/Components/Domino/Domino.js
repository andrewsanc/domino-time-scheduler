import React from "react";
import "./Domino.css";

const Domino = ({ hour, onMouseOverHandler }) => {
  return (
    <div className="domino" onMouseOver={() => onMouseOverHandler(hour)}>
      <h4 className="title">{hour}</h4>
    </div>
  );
};

export default Domino;
