import React from "react";
import Button from "../Button";

const DogecoinOnline = () => {
  return (
    <div className={"dogecoinOnlineContainer"}>
      <div className={"dogecoinOnlineLeft"}>
        <h1>{"Buy & Sell Dogecoin Online"}</h1>
        <p id={"para1"}>{"Add Doge to your crypto wallet"}</p>
        <p id={"coinAbout"}>
          {
            "Instant, fun, and free from the traditional banking system. Buy Dogecoin with your debit or credit card today."
          }
        </p>
      </div>
      <div className={"dogecoinOnlineRight"}>
        <h2>{"Get your crypto now!"}</h2>
        <div className={"formButton"}>
          <button id={"buy"}>{"BUY"}</button>
          <button id={"sell"}>{"SELL"}</button>
        </div>
        <div className={"cost"}>
          <div className={"cost1"}>
            <img src={"./images/assignment3/usaFlag.jpeg"} />
            <p>{"100"}</p>
          </div>
          <div className={"verticalLine"} />
          <select>
            <option defaultValue>{"USD"}</option>
          </select>
        </div>
        <hr className={"horLine"} />
        <div className={"cost"}>
          <div className={"cost1"}>
            <img src={"./images/assignment3/bitcoin.jpeg"} />
            <p>{"0,00956474"}</p>
          </div>
          <div className={"verticalLine"} />
          <select>
            <option defaultValue>{"BTC"}</option>
            <option
            ><img src={"./images/assignment3/bitcoin.jpeg"} /></option>
          </select>
        </div>
        <Button title={"BUY BITCOINS"} width={"235px"} color={"#86c306"} />
      </div>
    </div>
  );
};

export default DogecoinOnline;
