import React from "react";

const Info = (props) => {
  return (
    <div className={"infoContainer"}>
      <ul>
        <li>
          <h4>{props.heading}</h4>
        </li>
        <li>{props.val1}</li>
        <li>{props.val2}</li>
        <li>{props.val3}</li>
      </ul>
    </div>
  );
};

export default Info;
