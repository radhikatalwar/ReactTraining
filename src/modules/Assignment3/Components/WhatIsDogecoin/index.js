import React from "react";
import Side from "./side"

const WhatisDogecoin = () => {
  return (
    <div className="whatisDogecoin">
      <Side
        content={"Decetralized"}
        src={"./images/assignment3/decentralised.svg"}
      />

      <div className="whatisDogecoinCenter">
        <h1>{"What is Dogecoin?"}</h1>
        <p>
          {
            "Dogecoin (Doge) is a cryptocurrency created by software engineers in 3013. It’s been stated that it was created jokingly as a homage to Bitcoin, but with recent price surges, it’s becoming a much more serious investment for crypto-enthusiasts. "
          }
        </p>
      </div>
      <Side
        content={"Peer-to-peer"}
        src={"./images/assignment3/peertopeer.svg"}
      />
    </div>
  );
};

export default WhatisDogecoin;
