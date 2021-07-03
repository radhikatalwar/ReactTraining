import { makeStyles } from "@material-ui/core";
import React from "react";
import { Left } from "./Components/Left";
import { Navbar } from "./Components/Navbar";
import { Right } from "./Components/Right";

const styles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "initial",
      padding:"10px",
    },
  },
}));

export const Assignment13Builder = () => {
  const classes = styles();

  return (
    <>
      <Navbar />
      <div className={classes.mainContainer}>
        <Left />
        <Right />
      </div>
    </>
  );
};
