import React from "react";
import { useSelector } from "react-redux";
import { ContentEditableDiv } from "../../../Components/ContentEditableDiv";

export const Name = () => {
  const { color } = useSelector((state) => {
    return state.dataReducer;
  });

  return (
    <ContentEditableDiv
      value={"name"}
      style={{
        fontSize: "30px",
        color,
      }}
    />
  );
};
