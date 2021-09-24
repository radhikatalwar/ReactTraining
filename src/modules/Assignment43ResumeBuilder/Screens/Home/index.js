import { makeStyles } from "@material-ui/core";
import React from "react";
import { Heading } from "./Heading";
import { Navbar } from "./Navbar";
import { ResumeContainer } from "./ResumeContainer";

const styles = makeStyles({
  mainContainer: {
    width: "100%",
    paddingLeft:"23%",
  },
});

export const MainScreen = ({ handleDrawer }) => {
  const classes = styles();

  return (
    <div className={classes.mainContainer}>
      <Navbar handleDrawer={handleDrawer} />
      <Heading />
      <ResumeContainer />
    </div>
  );
};
