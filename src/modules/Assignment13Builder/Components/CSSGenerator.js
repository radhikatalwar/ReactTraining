import { makeStyles } from "@material-ui/core";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const styles = makeStyles({
  code: {
    padding: 0,
  },
});

export const CSSGenerator = () => {
  const classes = styles();
  const codeString = `
  .card_wrapper {
    box-shadow: 0px 1px 20px 2px rgba(189, 180, 180, 0.62);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
  }
  .stars i {
    color: orange;
    margin: 15px 0 0;
  }
  .ptitle h2 {
    color: #2c3e50;
    text-align: center;
    font-weight: bold;
  }
  img {
    width: 200px;
    height: 180px;
    border-radius: 50%;
  }
  .play {
    color: rgb(40, 107, 207);
    margin: 0 10px;
    font-size: 1.5rem;
  }
  button {
    color: #fff;
    width: 100%;
    height: 50px;
    font-size: 16px;
    background-color: #177fe4;
    outline: none;
    border: none;
  }
  button i {
    margin: 0 10px;
  }`;

  return (
    <>
      <SyntaxHighlighter
        language="css"
        style={dracula}
        className={classes.code}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};
