import React from "react";
import "./Card.css";
import CardHeader from "../Cards/CardHeader";
import CardSep from "../Cards/CardSep";
import CardText from "../Cards/CardText";

function Card(props) {
  return (
      <div className="card">
        <CardHeader caption={props.item.caption} />
        <CardSep />
        <CardText text={props.item.text} />
    </div>
  );
}

export default Card;
