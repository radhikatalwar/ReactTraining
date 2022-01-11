import React from "react";

const Content = (props) => {
  return (
    <div className={"whyXcoinsContent"}>
      <div className={"contentHeading"}>
        <img src={props.src} alt={"Icons"} />
        <h3>{props.heading}</h3>
      </div>
      <div>
        <p id={"coinAbout"}>{props.content}</p>
      </div>
    </div>
  );
};

export default Content;