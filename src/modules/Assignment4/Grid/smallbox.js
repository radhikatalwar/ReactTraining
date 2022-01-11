import React from "react";
import "./grid.css";

const SmallBox = (props) => {
  return (
    <div className={"smallbox"}>
      <h3>{props.heading}</h3>
      <p>{props.val1}</p>
      <p>{props.val2}</p>
      <p>{props.val3}</p>
      <p>{props.val4}</p>
    </div>
  );
};

export default SmallBox;
