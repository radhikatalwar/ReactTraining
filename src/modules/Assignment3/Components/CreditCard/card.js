import React from "react";
import Dots from "./dots";

const Card = (props) => {
  return (
    <div
      style={{ width:props.width ,height: props.height, backgroundColor: props.backgroundColor }}
      className={"card"}
    >
      <img src={props.src} alt="Visa Icon" />
      <div className={"allDots"}>
        <Dots />
        <Dots />
        <Dots />
        <p>4678</p>
      </div>
      <div className={"cardDetails"}>
        <div>
          <p>{"Card Holder"}</p>
          <h5>{props.name}</h5>
        </div>
        <div>
          <p>{"Expires"}</p>
          <h5>{"09/15/2022"}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
