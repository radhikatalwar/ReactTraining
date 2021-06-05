import React from "react";
import Header from "./Components/Header";
import BuyAndSell from "./Components/BuyAndSell";
import CreditCard from "./Components/CreditCard";
import DogecoinForMe from "./Components/DogecoinForMe";
import DogecoinOnline from "./Components/DogecoinOnline";
import WhatisDogecoin from "./Components/WhatIsDogecoin";
import WhereToSpend from "./Components/WhereToSpend";
import WhyXcoins from "./Components/WhyXcoins";
import "./index.css";

const Assignment3 = () => {
  return (
    <div className={"mainContainer"}>
      <div className={"wrapperClass"}>
        <Header />
        <DogecoinOnline />
        <CreditCard />
        <BuyAndSell
          heading={"How to Buy Dogecoin"}
          color={"#009cde"}
          title={"BUY DOGECOIN"}
          width={"260px"}
          buyandsell={"buy"}
        />
        <BuyAndSell
          heading={"How to Sell Dogecoin"}
          color={"#86c306"}
          title={"SELL BITCOIN"}
          width={"260px"}
          buyandsell={"sell"}
        />
        <WhyXcoins />
        <WhatisDogecoin />
        <WhereToSpend />
        <DogecoinForMe />
      </div>
    </div>
  );
};

export default Assignment3;
