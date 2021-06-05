import React from "react";
import SmallBox from "./SmallBox";

const BuyAndSellBox = (props) => {
  if (props.buyandsell == "buy") {
    return (
      <div className={"buyAndSellBox"}>
        <SmallBox
          src={"./images/assignment3/bluetick.svg"}
          number={"1"}
          heading={"Get verified quickly"}
          content={
            "Just sign up, upload and your verification documents and open your account."
          }
          backgroundColor={"#009cde"}
          borderRadius ={"50%"}
        />
        <SmallBox
          src={"./images/assignment3/bluewallet.svg"}
          number={"2"}
          heading={"Buy Dogecoin"}
          content={
            "Select which coins you would like to buy and how much you want to purchase. "
          }
          backgroundColor={"#009cde"}
          borderRadius ={"50%"}
        />
        <SmallBox
          src={"./images/assignment3/bluetimer.svg"}
          number={"3"}
          heading={"Receive coins"}
          content={
            "We will send your coins to your wallet within 15 minutes of payment approval."
          }
          backgroundColor={"#009cde"}
          borderRadius ={"50%"}
        />
      </div>
    );
  } else {
    return (
      <div className={"buyAndSellBox"}>
        <SmallBox
          src={"../images/assignment3/greenTick.svg"}
          number={"1"}
          heading={"Get verified quickly"}
          content={
            "Just sign up, upload and your verification documents and open your account."
          }
          backgroundColor={"#86c306"}
          borderRadius ={"10px"}
        />
        <SmallBox
          src={"./images/assignment3/greenWallet.svg"}
          number={"2"}
          heading={"Buy Dogecoin"}
          content={
            "Select which coins you would like to buy and how much you want to purchase. "
          }
          backgroundColor={"#86c306"}
          borderRadius ={"10px"}
        />
        <SmallBox
          src={"./images/assignment3/greenTimer.svg"}
          number={"3"}
          heading={"Receive coins"}
          content={
            "We will send your coins to your wallet within 15 minutes of payment approval."
          }
          backgroundColor={"#86c306"}
          borderRadius ={"10px"}
        />
      </div>
    );
  }
};

export default BuyAndSellBox;
