import { makeStyles } from "@material-ui/core";
import React from "react";
import { Left } from "./Left";
import { Right } from "./Right";

const styles = makeStyles({
  MainBoxContainer: {
    position: "absolute",
    top: "70px",
    left: "5%",
    zIndex: "2",
    width: "90%",
    display: "flex",
  },
  left: {
    width: "15%",
  },
  right: {
    width: "85%",
    paddingLeft: "30px",
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
