import { Button, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const styles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px",
    width: "fit-content",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "initial",
    },
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#177fe4",
    color: "#fff",
    fontSize: "16px",
    margin: "10px",
    "&:hover": {
      backgroundColor: "#2a2a2a",
    },
  },
}));

export const CodeGenerator = (props) => {
  const classes = styles();
  const { products } = useSelector((state) => state.productReducer);
  var finalString = "";

  products.map((product, index) => {
    const codeString = `<div class="card_wrapper">
    <div class="stars">
      <i class="fa fa-star"> </i>
      <i class="fa fa-star"> </i>
      <i class="fa fa-star"> </i>
      <i class="fa fa-star"> </i>
      <i class="fa fa-star"> </i>
    </div>
    <div class="ptitle">
      <h2>Product ${index} Here</h2>
    </div>
    <div class="image">
      <img src=${product.imageLink}" />
    </div>
    <div class="about">
      <p><i class="fa fa-play-circle play" aria-hidden="true"></i>${product.title}</p>
      <p><i class="fa fa-play-circle play" aria-hidden="true"></i>${product.tag}</p>
      <p><i class="fa fa-play-circle play" aria-hidden="true"></i>${product.link}</p>
    </div>
    <button>
      Check on Amazon<i aria-hidden="true" class="fa fa-chevron-right"></i>
    </button>
  </div>
    `;
    finalString += codeString;
  });

  return (
    <div className={classes.mainContainer}>
      <Paper elevation={3} className={classes.paper}>
        <SyntaxHighlighter language="jsx" style={dracula}>
          {finalString}
        </SyntaxHighlighter>
        <Button
          className={classes.button}
          onClick={() => {
            props.handleModal();
          }}
        >
          {"Close"}
        </Button>
      </Paper>
    </div>
  );
};
