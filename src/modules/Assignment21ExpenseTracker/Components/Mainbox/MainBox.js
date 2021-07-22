import { makeStyles } from "@material-ui/core";
import React from "react";
import { Left } from "./Left/Left";
import { Right } from "./Right/Right";

const styles = makeStyles({
  MainBoxContainer: {
    width: "99%",
    display: "flex",
  },
  left: {
    width: "15%",
    padding: "20px",
    backgroundColor: "#2a3042",
  },
  right: {
    width: "85%",
  },
});

export const MainBox = () => {
  const classes = styles();
  return (
    <div className={classes.MainBoxContainer}>
      <div className={classes.left}>
        <Left />
      </div>
      <div className={classes.right}>
        <Right />
      </div>
    </div>
  );
};
