import React from "react";
import BuyAndSign from "../BuyAndSign";
import Content from "./Content";

const WhyXcoins = () => {
  return (
    <div className={"whyXcoinsContainer"}>
      <div className={"whyXcoinsImage"}>
        <img
          id={"image1"}
          src={"./images/assignment3/whyxcoins.svg"}
          alt={"Why Xcoins"}
        />
      </div>
      <div className={"whyXcoinsRight"}>
        <h1 id={"heading1"}>{"Why Buy & Sell Dogecoin with Xcoins?"}</h1>
        <Content
          src={"./images/assignment3/lock.svg"}
          content={
            "Xcoins reputation for speed and security will keep you coming back. World-class encryption technology keeps your data secure and your transactions safe. "
          }
          heading={"Encryption technology"}
        />
        <Content
          src={"./images/assignment3/message.svg"}
          content={
            "If you have any questions about Dogecoin or how to buy & sell it, you can contact our 24/7 customer support team"
          }
          heading={"Customer care"}
        />
        <BuyAndSign />
      </div>
    </div>
  );
};

export default WhyXcoins;
