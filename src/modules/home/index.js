//imports
//Component declare/define.
//inside component write HTML Code

import React, { Component } from "react";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className={"homeContainer"}>
        <h1 className={"h1tag"}>{"Hello From Home"}</h1>
        <h2 id={"h2tag"}>{"Hello From Home"}</h2>
        <h3>{"Hello From Home"}</h3>
      </div>
    );
  }
}

export default Home;
