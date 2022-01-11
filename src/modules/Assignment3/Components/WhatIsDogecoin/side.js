import React from "react";

const Side = (props) => {
  return (
    <div className={"sideMain"}>
      <img src={props.src} alt={"Side Image"} />
      <div className={"sideContent"}>
        <img src={"./images/assignment3/tick.svg"} alt={"Side Image"} />
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Side;
