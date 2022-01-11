import React from "react";
import Image from "./Image";

const WhereToSpend = () => {
  return (
    <div className="whereToSpend">
      <h2>{"Where Can I Spend my Dogecoin?"}</h2>
      <p>
        {
          "There are a variety of fashion and clothing shops online accepting Doge as payment. You can also use your Doge to pay for domains and hosting, or online casinos."
        }
      </p>
      <div className="whereToSpendImageBox">
        <Image
          content={"CLOTHING STORES"}
          src={"./images/assignment3/clothing.svg"}
        />
        <Image
          content={"DOMAINS & HOSTING"}
          src={"./images/assignment3/hosting.svg"}
        />
        <Image
          content={"ONLINE CASINOS"}
          src={"./images/assignment3/casino.svg"}
        />
      </div>
    </div>
  );
};

export default WhereToSpend;
