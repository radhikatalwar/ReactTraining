import React from "react";
import ContentEditable from "react-contenteditable";

export const ContentEditableDiv = (props) => {
  const { style, width, name } = props;

  return (
    <ContentEditable
      style={{ width: width, ...style }}
      html={localStorage.getItem(name)}
      disabled={false}
      onChange={(event) => localStorage.setItem(name, event.target.value)}
    />
  );
};
