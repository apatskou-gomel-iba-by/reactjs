import React from "react";
import "./CardHeader.css";
//import Checkbox from "./CardHeader/Checkbox";
import Text from "./CardHeader/Text";

function CardHeader(props) {
  return (
    <div className="card-header">
      <Text caption={props.caption}/>
    </div>
  );
}

//<Checkbox caption={props.caption}/>
export default CardHeader;
