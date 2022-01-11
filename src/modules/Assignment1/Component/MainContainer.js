import React, { Component } from "react";
import "../index.css";
import Left from "./Left";
import Lite from "./Lite";
import Pro from "./Pro";
import RightUpper from "./RightUpper";

class MainContanier extends Component {
  render() {
    return (
      <div className={"mainContainer"}>
        <Left />
        <div className={"rightContainer"}>
          <RightUpper />
          <div className={"rightBottomContainer"}>
            <Lite />
            <Pro />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContanier;
