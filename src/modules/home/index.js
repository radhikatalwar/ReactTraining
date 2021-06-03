//imports
//Component declare/define.
//inside component write HTML Code

import React, { Component } from "react";
import "./index.css";

class Home extends Component {
  renderBox(heading, buttonTitle, extraClass = "", styleObj = {}) {
    return (
      <div className={"itemContainer"}>
        <h3 className={extraClass}>{heading}</h3>
        <button style={styleObj}>{buttonTitle}</button>
      </div>
    );
  }
  render() {
    return (
      <div className={"homeContainer"}>
        <h1>{"Home Page"}</h1>
        {this.renderBox("First Container", "Click Me First", "redClrText")}
        {this.renderBox("Second Container", "Click Me Second", "", {
          backgroundColor: "blue",
        })}
        {this.renderBox("Third Container", "Click Me Third")}
      </div>
    );
  }
}

export default Home;
