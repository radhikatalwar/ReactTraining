import { makeStyles } from "@material-ui/core";
import React from "react";
import { Left } from "../Home/Left";
import { Right } from "../Start/Right";

const styles = makeStyles({
  mainContainer: {
    maxWidth: "100vw",
    display: "flex",
    backgroundColor: "#fbfbfb",
    height: "580px",
  },
});

export const Start = () => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Left />
      <Right />
    </div>
  );
};
