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
  card: {
    width: "27%",
    margin: "25px",
    padding: "0px",
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    padding: "10px",
  },
  media: {
    height: 180,
    width: 200,
    margin: "0 auto",
    borderRadius: "50%",
  },
  action: {
    padding: "0",
  },
  button: {
    width: "100%",
    height: "50px",
    backgroundColor: "#177fe4",
    color: "#fff",
    fontSize: "16px",
  },
  about: {
    color: "#2c3e50",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#177fe4",
    margin: "0 10px",
  },
  star: {
    margin: "10px 23%",
    textAlign: "center",
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
