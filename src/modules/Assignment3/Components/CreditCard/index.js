import React from "react";
import Dots from "./dots";

const CreditCard = () => {
  return (
    <div className={"creditCardContainer"}>
      <div className={"card card1"}>
        <img src={"./images/assignment3/mastercard.svg"} alt="Visa Icon" />
        <div className={"allDots"}>
          <Dots />
          <Dots />
          <Dots />
          <p>4678</p>
        </div>
        <div className={"cardDetails"}>
          <div>
            <p>{"Card Holder"}</p>
            <h5>{"George Dux"}</h5>
          </div>
          <div>
            <p>{"Expires"}</p>
            <h5>{"09/15/2022"}</h5>
          </div>
        </div>
      </div>
      <div className={"card card2"}>
        <img src={"./images/assignment3/visa.svg"} alt="MasterCard Icon" />
        <div className={"allDots"}>
          <Dots />
          <Dots />
          <Dots />
          <p>4678</p>
        </div>
        <div className={"cardDetails"}>
          <div>
            <p>{"Card Holder"}</p>
            <h5>{"John Connor"}</h5>
          </div>
          <div>
            <p>{"Expires"}</p>
            <h5>{"09/15/2022"}</h5>
          </div>
        </div>
      </div>
      {/* <Card
        height={"147px"}
        width={"262px"}
        backgroundColor={"#fff6f6"}
        src={"./images/assignment3/visa.svg"}
        name={"George Dux"}
      />
      <Card
        height={"180px"}
        width={"300px"}
        backgroundColor={"#f6fcff"}
        src={"./images/assignment3/mastercard.svg"}
        name={"John Connor"}
      /> */}
      <div className="card3">
        <h1>{"Exchange your Dogecoin Instantly!"}</h1>
        <p>
          {
            "Buy & sell your Doge using your Visa or Mastercard debit or credit card."
          }
        </p>
      </div>
    </div>
  );
};

export default CreditCard;
