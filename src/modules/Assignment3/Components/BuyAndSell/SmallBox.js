import React from "react";

const SmallBox = (props) => {
  return (
    <div className={"smallBox"}>
      <img src={props.src} alt={"Small Icons"} />
      <div className={"details"}>
        <div
          style={{
            borderRadius: props.borderRadius,
            backgroundColor: props.backgroundColor,
          }}
          className={"detailsIcon"}
        >
          <span className={"detailsIconInner"}>{props.number}</span>
        </div>
        <p>{props.heading}</p>
      </div>
      <p className={"smallBoxAbout"}>{props.content}</p>
    </div>
  );
};

export default SmallBox;
