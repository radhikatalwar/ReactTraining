import React from "react";
import BuyAndSign from "../BuyAndSign";

const DogecoinForMe = () => {
  return (
    <div className={"dogecoinForMeContainer"}>
      <div className={"dogecoinForMeImage"}>
        <img
          id={"image1"}
          src={"./images/assignment3/womanwithcoffee.svg"}
          alt={"Why Xcoins"}
        />
      </div>
      <div className={"dogecoinForMeRight"}>
        <h1 id={"heading1"}>{"Is Dogecoin For Me?"}</h1>
        <p id={"coinAbout"}>
          {
            "Dogecoin, although created for fun, has recently had a large price surge. Its growth in popularity also means that more companies are accepting it as a form of payment."
          }
        </p>
        <BuyAndSign />
      </div>
    </div>
  );
};

export default DogecoinForMe;
