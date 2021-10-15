import React from "react";
import "./Body.css";
import Card from "./Card";

function Body(props) {
  return (
    <div className="body">
        <Card item={props.items[0]}></Card>
        <Card item={props.items[1]}></Card>
        <Card item={props.items[2]}></Card>
        <Card item={props.items[3]}></Card>
        <Card item={props.items[4]}></Card>
        <Card item={props.items[5]}></Card>
        <Card item={props.items[6]}></Card>
        <Card item={props.items[7]}></Card>
    </div>
  );
}

/*
        <div className="card">
        <CardHeader caption={props.items[0].caption} />
        <CardSep />
        <CardText text={props.items[0].text} />
      </div>
      <div className="card">
        <CardHeader caption={props.items[1].caption} />
        <CardSep />
        <CardText text={props.items[1].text} />
      </div>
      <div className="card">
        <CardHeader caption={props.items[2].caption} />
        <CardSep />
        <CardText text={props.items[2].text} />
      </div>
      <div className="card">
        <CardHeader caption={props.items[3].caption} />
        <CardSep />
        <CardText text={props.items[3].text} />
      </div>

*/

export default Body;
