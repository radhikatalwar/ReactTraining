import React from "react";

const Image = (props) => {
  return (
    <div className={"ImageBox"}>
      <img id="blank" src={"./images/assignment3/blankwhite.svg"} alt={"Blank"} /> 
      <img id="actualImage" src={props.src} alt={"Where to SpendImage"} />
      <p>{props.content}</p>
    </div>
  );
};

export default Image;
