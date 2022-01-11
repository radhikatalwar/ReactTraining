import React, { Component } from "react";

export default class ToolBox extends Component {
  render() {
    const { src, title, content, direction } = this.props;

    if (direction == "left") {
      return (
        <div
          className={"toolBox"}
          style={{ backgroundColor: "rgb(45, 198, 232)" }}
        >
          <img
            src={src}
            alt={"Tool bar Image"}
            width={"100px"}
            height={"100px"}
          ></img>
          <div class={"toolBoxContent"}>
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={"toolBox"}
          style={{ backgroundColor: "rgb(62,173,206)" }}
        >
          <div class={"toolBoxContent"}>
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
          <img
            src={src}
            alt={"Tool bar Image"}
            width={"100px"}
            height={"100px"}
          ></img>
        </div>
      );
    }
  }
}
