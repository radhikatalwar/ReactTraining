import { makeStyles } from "@material-ui/core";
import React from "react";
import { Left } from "./Left";
import { Question } from "./Question";

const styles = makeStyles({
  mainContainer: {
    maxWidth: "100vw",
    display: "flex",
    backgroundColor: "#fbfbfb",
    height: "580px",
  },
});

export const Home = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Left />
      <Question />
    </div>
  );
};
