import { makeStyles } from "@material-ui/core";
import React from "react";
import { Left } from "./Components/Left";
import { Navbar } from "./Components/Navbar";
import { Right } from "./Components/Right";

const styles = makeStyles({
  mainContainer: {
    display: "flex",
  },
});

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
