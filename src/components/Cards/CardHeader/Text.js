import React, { useState } from "react";
import "./Text.css";

function Text(props) {
  let [bold, setBold] = useState('text');

  const clickHandler = () => {
    if ((bold === "text")) {
      setBold("textBold");
    } else {
      setBold("text");
    }
    console.log(bold)
  };

  return (
    <div className={bold}>
      {props.caption}
      <input type="checkbox" onChange={clickHandler} />
    </div>
  );
}

export default Text;
