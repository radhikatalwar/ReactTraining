import React, { Component } from "react";
import ToolBox from "../../Components/ToolBox";
import "./index.css";
import { Email, ModeComment } from "@material-ui/icons";

export default class Assignment2 extends Component {
  render() {
    const styleImage = {
      backgroundImage: "url('./images/assignment2/header.jpeg')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    return (
      <div className={"mainContainer"}>
        <div className={"webMainContainer"}>
          <div className="headContainer" style={styleImage}>
            <div className={"heading"}>
              <p>
                <span>{"9 React Developer Tools "}</span>
                {"to Create Better Apps Faster"}
              </p>
            </div>
          </div>
          <ToolBox
            src={"./images/assignment2/developerIcon.png"}
            title={"1) React Developer Tools"}
            content={
              "Official Chrome extension for React from Facebook that lets you examine the list of components and subcomponents on the webpage"
            }
            direction={"left"}
          />
          <ToolBox
            src={"./images/assignment2/appIcon.svg"}
            title={"2) Create React App"}
            content={"Tools used in the process of setting up a React IDE"}
            direction={"right"}
          />
          <ToolBox
            src={"./images/assignment2/storybookIcon.png"}
            title={"3) Storybook"}
            content={"Online app that lets you create UI components"}
            direction={"left"}
          />
          <ToolBox
            src={"./images/assignment2/guidelistIcon.png"}
            title={"4) React Styleguidist"}
            content={"It offers an interactive way of creating and sharing UI"}
            direction={"right"}
          />
          <ToolBox
            src={"./images/assignment2/developerIcon.png"}
            title={"5) Bit"}
            content={
              "CLI tool and online platform that enables you to publish React components"
            }
            direction={"left"}
          />
          <ToolBox
            src={"./images/assignment2/storybookIcon.png"}
            title={"6) React Bootstrap"}
            content={
              "Powerful toolkit that comprises HTML,CSS, and Javascript tools to helpyou create webpages and applications"
            }
            direction={"right"}
          />
          <ToolBox
            src={"./images/assignment2/storybookIcon.png"}
            title={"7) React Sight"}
            content={
              "Chrome extension for a visual illustration of all components of your app in the live tree structure"
            }
            direction={"left"}
          />
          <ToolBox
            src={"../images/assignment2/guidelistIcon.png"}
            title={"8) Why did you render"}
            content={
              "It alerts you in the console when an avoidable render occurs"
            }
            direction={"right"}
          />
          <ToolBox
            src={"./images/assignment2/storybookIcon.png"}
            title={"9) React Proto"}
            content={
              "Lets you drag and drop the components your way to create a UI instead of coding"
            }
            direction={"left"}
          />
          <div className="footer">
            <ModeComment />
            <p>{"radhika_talwar | "}</p>
            <Email />
            <p>{"radhika.talwar@appinventiv.com"}</p>
          </div>
        </div>
      </div>
    );
  }
}
