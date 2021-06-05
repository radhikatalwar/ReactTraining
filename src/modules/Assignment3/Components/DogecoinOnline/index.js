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
          <button>{"BUY"}</button>
          <button>{"SELL"}</button>
        </div>
        {/* <div className={"cost"}>
          <div>
            <img src={"./images/assignment3/usaFlag.jpeg"}/>
            <p>{"100"}</p>
          </div>
          <select>
            <option defaultValue>{"USD"}</option>
          </select>
        </div>
        <div className={"cost"}>
          <div>
            <img />
            <p>{"0,00956474"}</p>
          </div>
          <p>{""}</p>
        </div> */}
        <Button title={"BUY BITCOINS"} width={"260px"} color={"#86c306"} />
      </div>
    </div>
  );
};

export default DogecoinOnline;
