import React from "react";

const Button = (props) => {
  return (
    <>
      <button id={"commonButton"}style={{ backgroundColor: props.color, width: props.width }}>
        {props.title}
      </button>
    </>
  );
};

export default Button;
