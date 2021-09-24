import React from "react";
import ContentEditable from "react-contenteditable";
import { useDispatch, useSelector } from "react-redux";
import { HandleDetails } from "../reduxComponents/action";

export const ContentEditableDiv = (props) => {
  const { style, value } = props;
  const dispatch = useDispatch();

  const { details } = useSelector((state) => {
    return state.dataReducer;
  });

  return (
    <ContentEditable
      style={{ width: "100%", ...style }}
      spellCheck={false}
      html={details[value]}
      disabled={false}
      onChange={(event) => {
        dispatch(HandleDetails({ name: value, currVal: event.target.value }));
      }}
    />
  );
};
