import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

const styles = makeStyles({
  title: {
    fontSize: "18px",
    margin: "15px 0",
    fontWeight: "bold",
  },
});

export const Beautify = () => {
  const classes = styles();
  const object = { style: "hello", main: ["main1", "main2"], sub: "subhello" };

  return (
    <>
      <Typography className={classes.title}>{"Beautify"}</Typography>

      <SyntaxHighlighter language="javascript" style={twilight}>
        {JSON.stringify(object, null, 2)}
      </SyntaxHighlighter>
    </>
  );
};
