import React from "react";
import "./CardText.css";

function CardText(props) {
  return (
      <div className="card-text">{props.text}</div>
  );
}

export default CardText;