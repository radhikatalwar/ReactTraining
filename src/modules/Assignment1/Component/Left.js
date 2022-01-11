
import React from "react";

class Left extends React.Component {
  render() {
    return (
      <div className={"leftContainer"}>
        <p className={"saveYourMoney"}>
          {"Save your "}
          <span className="bold">{"money now."}</span>
        </p>
        <br />
        <p className={"small"}>
          {
            "Manage your country Bot in few easy steps.join our pro plan to try 360* experience of our service."
          }
        </p>
        <br />
        <p className={"small"}>
          {
            "Start your 14 days of free Pro plan,you can always upgrade it or stay with the Lite version for free."
          }
        </p>
        <div className={"leftImage"}>
          <img src={"./images/picture.png"} width={"140px"} alt="" />
        </div>
      </div>
    );
  }
}

export default Left;
