import React from "react";
import Button from "../Button";
import BuyAndSellBox from "./BuyAndSellBox";

const BuyAndSell = (props) => {
  return (
    <div className={"buyAndSell"}>
      <div className={"buyAndSellMain"}>
        <h2>{props.heading}</h2>
        <p className={"simpleSteps"}>{"Only 3 simple steps"}</p>
      </div>
      <BuyAndSellBox buyandsell={props.buyandsell} />
      <Button color={props.color} title={props.title} width={props.width} />
    </div>
  );
};

export default BuyAndSell;
