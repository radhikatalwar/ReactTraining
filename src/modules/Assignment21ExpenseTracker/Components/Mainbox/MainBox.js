import { makeStyles } from "@material-ui/core";
import React from "react";
import { Left } from "./Left/Left";
import { Right } from "./Right/Right";

const styles = makeStyles((theme) => ({
  MainBoxContainer: {
    width: "99%",
    display: "flex",
    marginTop: "71px",
  },
  left: {
    width: "15%",
    padding: "20px",
    backgroundColor: "#2a3042",
    position: "fixed",
    zIndex: "2",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  right: {
    width: "85%",
    marginLeft: "18%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0",
      marginTop: "50px",
    },
  },
}));

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
